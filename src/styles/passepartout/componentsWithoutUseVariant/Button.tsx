import React, { FC, createContext, useContext } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { StyleSheet, UnistylesVariants } from 'react-native-unistyles';
import {
  PressableScale,
  PressableScaleProps,
} from '@components/buttons/PressableScale';
import { getVariants } from '../getVariants';
import { mapVariants } from '../utils';
import { ActivityIndicator } from './ActivityIndicator';
import { Brick, BrickProps } from './Brick';
import { Text, TextProps } from './Text';

type ButtonVariants = UnistylesVariants<typeof styles>;

export type ButtonProps = PressableScaleProps &
  BrickProps &
  ButtonVariants & {
    title?: string;
    style?: StyleProp<ViewStyle>;
    pressableWhenDisabled?: boolean;
    dynamic?: boolean;
    children?: React.ReactNode;
    pressableComponent?: React.ComponentType<PressableScaleProps>;
    testID?: string;
  };

type ButtonTextProps = Omit<TextProps, 'size'> &
  UnistylesVariants<typeof textStyles> & { hidden?: boolean };

export type ButtonBadgeProps = TextProps;

const ButtonContext = createContext<
  Omit<ButtonVariants, 'shape' | 'orientation' | 'compact'>
>({});

export const Button: FC<ButtonProps> & {
  Text: FC<ButtonTextProps>;
  Spinner: FC;
  Badge: FC<ButtonBadgeProps>;
} = ({
  title,
  shape = 'rounded',
  appearance,
  size = 'large',
  orientation = 'horizontal',
  compact,
  disabled,
  pressableWhenDisabled,
  pressableComponent: PressableComponent = PressableScale,
  style,
  children,
  contentContainerStyle,
  testID,
  ...props
}) => {
  const context = {
    orientation,
    compact,
    shape,
    appearance: appearance || 'hero',
    size,
    disabled,
  };
  // styles.useVariants(context)

  return (
    <ButtonContext value={context}>
      <Brick
        as={PressableComponent}
        disabled={disabled && !pressableWhenDisabled}
        style={[styles.wrapper(context), style]}
        testID={testID}
        contentContainerStyle={[
          styles.container(context),
          contentContainerStyle,
        ]}
        {...props}
      >
        {title && <Button.Text>{title}</Button.Text>}
        {children}
      </Brick>
    </ButtonContext>
  );
};

function ButtonText({ size, font, ...props }: ButtonTextProps) {
  const context = useContext(ButtonContext);
  // textStyles.useVariants({})

  return (
    <Text
      numberOfLines={1}
      style={[
        textStyles.text({
          ...context,
          size: size ?? context.size,
          font,
          hidden: props.hidden,
        }),
      ]}
      {...props}
    />
  );
}

function ButtonSpinner() {
  const { appearance, disabled, size } = useContext(ButtonContext);
  // styles.useVariants({ appearance, disabled, size })

  return (
    <ActivityIndicator
      style={
        styles.spinner({ appearance, disabled, size }) as StyleProp<ViewStyle>
      }
      color={
        appearance === 'primary' && !disabled ? 'interactivePrimary' : 'primary'
      }
    />
  );
}

function ButtonBadge({ children, style, ...props }: ButtonBadgeProps) {
  const context = useContext(ButtonContext);
  // styles.useVariants(context)

  return (
    <Text
      size="sm"
      align="center"
      font="bodySemiBold"
      style={[styles.badge(context), style]}
      {...props}
    >
      {children}
    </Text>
  );
}

Button.Text = ButtonText;
Button.Spinner = ButtonSpinner;
Button.Badge = ButtonBadge;

const styles = StyleSheet.create(theme => {
  const buttonVariants = {
    orientation: {
      horizontal: {
        flexDirection: 'row',
      },
      vertical: {
        flexDirection: 'column',
      },
    },
    appearance: {
      hero: {
        backgroundColor: theme.colors.background.interactiveHero,
      },
      primary: {
        backgroundColor: theme.colors.background.interactivePrimary,
      },
      secondary: {
        borderColor: theme.colors.background.interactivePrimary,
        borderWidth: 1,
      },
      text: {},
      link: {},
    },
    disabled: {
      true: {
        backgroundColor: theme.colors.background.interactiveDisabled,
        ...{ borderColor: theme.colors.stroke.secondary, borderWidth: 1 },
      },
    },

    size: {
      small: {
        paddingHorizontal: theme.spacings.mlg,
        paddingVertical: theme.spacings.sm,
        minHeight: theme.components.button.smallHeight,
        gap: theme.spacings.sm,
      },
      medium: {
        paddingHorizontal: theme.spacings.lg,
        paddingVertical: theme.spacings.sm,
        minHeight: theme.components.button.mediumHeight,
        gap: 6,
      },
      large: {
        paddingHorizontal: theme.spacings.lg,
        paddingVertical: theme.spacings.md,
        minHeight: theme.components.button.largeHeight,
        gap: theme.spacings.md,
      },
    },
    compact: {
      true: {
        paddingHorizontal: 0,
        paddingVertical: 0,
        minHeight: 0,
      },
    },
    shape: {
      rounded: {
        borderRadius: theme.borderRadiuses.button,
      },
      rectangular: {
        borderRadius: 0,
      },
      circular: {
        aspectRatio: 1,
        padding: 0,
        borderRadius: theme.borderRadiuses.full,
      },
    },
  } as const;

  const wrapperVariants = {
    orientation: {},
    appearance: {},
    disabled: {},
    size: {},
    compact: {},
    shape: {
      rounded: {
        borderRadius: theme.borderRadiuses.button,
      },
      rectangular: {
        borderRadius: 0,
      },
      circular: {
        aspectRatio: 1,
        padding: 0,
        borderRadius: theme.borderRadiuses.full,
      },
    },
  } as const;

  const iconVariants = {
    orientation: {},
    appearance: {
      hero: {
        color: theme.colors.text.primary,
      },
      primary: {
        color: theme.colors.text.interactivePrimary,
      },
      secondary: {
        color: theme.colors.text.interactiveSecondary,
      },
      text: {
        color: theme.colors.text.primary,
      },
      link: {
        color: theme.colors.text.interactiveLink,
      },
    },
    hidden: {
      true: {
        opacity: 0,
      },
    },
    disabled: {
      true: {
        color: theme.colors.text.interactiveDisabled,
      },
    },
    size: {
      small: { transform: [{ scale: 0.75 }] },
      medium: { transform: [{ scale: 0.85 }] },
      large: {},
    },
    compact: {},
    shape: {},
  };

  const spinnerVariants = {
    orientation: {},
    appearance: {},
    disabled: {},
    size: {
      small: { transform: [{ scale: 0.75 }] },
      medium: { transform: [{ scale: 0.85 }] },
      large: {},
    },
    compact: {},
    shape: {},
  };

  const badgeVariants = {
    shape: {},
    orientation: {},
    appearance: {},
    disabled: {
      true: {
        backgroundColor: theme.colors.background.interactiveDisabled,
      },
    },
    size: {},
    compact: {},
  };

  return {
    container: ctx => ({
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 0,
      ...getVariants(ctx, buttonVariants),

      variants: buttonVariants,
      ...(ctx?.appearance === 'link' && ctx?.disabled === true
        ? {
            backgroundColor: 'transparent',
            borderWidth: 0,
          }
        : {}),

      ...(ctx?.appearance === 'text' && ctx?.disabled === true
        ? {
            backgroundColor: 'transparent',
            borderWidth: 0,
          }
        : {}),

      compoundVariants: [
        {
          appearance: 'link',
          disabled: true,
          styles: {
            backgroundColor: 'transparent',
            borderWidth: 0,
          },
        },
        {
          appearance: 'text',
          disabled: true,
          styles: {
            backgroundColor: 'transparent',
            borderWidth: 0,
          },
        },
      ],
    }),
    wrapper: ctx => ({
      ...getVariants(ctx, wrapperVariants),
      variants: wrapperVariants,
    }),
    icon: ctx => ({
      ...getVariants(ctx, iconVariants),
      variants: iconVariants,
    }),
    spinner: ctx => ({
      ...getVariants(ctx, spinnerVariants),
      variants: spinnerVariants,
    }),

    badge: ctx => ({
      position: 'absolute',
      backgroundColor: theme.colors.background.brand,
      paddingHorizontal: theme.spacings.sm,
      lineHeight: 20,
      minWidth: 20,
      borderRadius: theme.borderRadiuses.full,
      ...getVariants(ctx, badgeVariants),
      variants: badgeVariants,
    }),
  };
});

const textStyles = StyleSheet.create(theme => {
  const fontVariants = mapVariants(
    theme.fonts,
    'fontFamily',
    theme.components.button.fontFamily,
  );

  const variants = {
    font: fontVariants,
    appearance: {
      hero: {
        color: theme.colors.text.primary,
      },
      primary: {
        color: theme.colors.text.interactivePrimary,
      },
      secondary: {
        color: theme.colors.text.interactiveSecondary,
      },
      text: {
        color: theme.colors.text.primary,
      },
      link: {
        color: theme.colors.text.interactiveLink,
        fontFamily: theme.fonts.bodySemiBold,
      },
    },
    disabled: {
      true: {
        color: theme.colors.text.interactiveDisabled,
      },
    },
    hidden: {
      true: {
        opacity: 0,
      },
    },
    size: {
      small: {
        fontSize: theme.fontSizes.sm,
        lineHeight: theme.lineHeights.sm,
      },
      medium: {},
      large: {
        fontSize: theme.fontSizes.md,
        lineHeight: theme.lineHeights.md,
      },
    },
  };

  return {
    text: ctx => ({
      textAlign: 'center',
      ...getVariants(ctx, variants),
      variants,
    }),
  };
});
