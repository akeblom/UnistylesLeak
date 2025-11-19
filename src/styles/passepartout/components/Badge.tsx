import React from 'react';
import { FC, createContext, useContext } from 'react';
import { Platform, StyleProp, ViewStyle } from 'react-native';
import { StyleSheet, UnistylesVariants } from 'react-native-unistyles';
import { TextProps } from '@styles/passepartout/components/Text';
import { Brick, BrickProps } from './Brick';
import { Text } from './Text';

export type BadgeVariants = UnistylesVariants<typeof styles>;

export type BadgeProps = BadgeVariants & {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
} & BrickProps;

type BadgeTextProps = TextProps;

const BadgeContext = createContext<BadgeVariants>({});

export const Badge: FC<BadgeProps> & {
  Text: FC<BadgeTextProps>;
} = ({
  shape = 'square',
  type = 'success',
  size = 'small',
  justifyContent = 'center',
  alignItems = 'center',
  disabled,
  style,
  children,
  ...props
}) => {
  const context = {
    shape,
    type,
    size,
    disabled,
  };
  styles.useVariants(context);

  return (
    <BadgeContext value={context}>
      <Brick
        justifyContent={justifyContent}
        alignItems={alignItems}
        {...props}
        style={[
          styles.badge,
          {
            ...(shape === 'triangle' ? { backgroundColor: 'transparent' } : {}),
          },
          style,
        ]}
      >
        {children}
      </Brick>
    </BadgeContext>
  );
};

const BadgeText = ({ font = 'bodySemiBold', ...props }: BadgeTextProps) => {
  const context = useContext(BadgeContext);
  styles.useVariants(context);

  return <Text numberOfLines={1} style={styles.text} font={font} {...props} />;
};

Badge.Text = BadgeText;

const styles = StyleSheet.create(theme => {
  return {
    badge: {
      alignSelf: 'flex-start',
      overflow: 'hidden',
      backgroundColor: theme.colors.status.success,
      variants: {
        type: {
          interactivePrimary: {
            backgroundColor: theme.colors.background.interactivePrimary,
          },
          success: {
            backgroundColor: theme.colors.status.success,
          },
          attention: {
            backgroundColor: theme.colors.status.attention,
          },
          conflict: {
            backgroundColor: theme.colors.status.conflict,
          },
          information: {
            backgroundColor: theme.colors.status.information,
          },
          default: {
            backgroundColor: theme.colors.background.interactivePrimary,
          },
        },
        shape: {
          circle: {
            borderRadius: theme.borderRadiuses.full,
          },
          square: {
            borderRadius: theme.spacings.sm,
          },
          triangle: {},
        },
        disabled: {
          true: {
            backgroundColor: theme.colors.background.interactiveDisabled,
          },
        },
        size: {
          small: {
            minWidth: theme.spacings.xl,
            height: theme.spacings.xl,
          },
          large: {
            minWidth: theme.spacings['2xl'],
            height: theme.spacings['2xl'],
          },
        },
      },
    },
    text: {
      paddingHorizontal: theme.spacings.sm,
      marginTop: Platform.OS === 'ios' ? 0 : -1,
      borderRadius: 0,
      variants: {
        shape: {},
        type: {
          conflict: {
            color: theme.colors.text.interactivePrimary,
          },
          interactivePrimary: {
            color: theme.colors.text.interactivePrimary,
          },
          default: {
            color: theme.colors.text.primary,
          },
        },
        disabled: {},
        size: {
          small: {},
          large: {},
        },
      },
    },
  };
});
