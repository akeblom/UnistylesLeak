import React from 'react';
import { View } from 'react-native';
import { StyleSheet, UnistylesVariants } from 'react-native-unistyles';
import { getVariants } from '../getVariants';
import { mapVariants } from '../utils';

type BrickVariants = UnistylesVariants<typeof styles>;
type BrickComponentProps<T extends React.ElementType> =
  React.ComponentProps<T> & { as?: T } & BrickVariants;

export type BrickProps = BrickVariants;

export const Brick = <T extends React.ElementType = typeof View>({
  as: Component = View,
  margin,
  marginBlock,
  marginInline,
  marginStart,
  marginEnd,
  marginTop,
  marginBottom,

  padding,
  paddingBlock,
  paddingInline,
  paddingStart,
  paddingEnd,
  paddingTop,
  paddingBottom,

  backgroundColor,

  borderRadius,
  borderRadiusTopStart,
  borderRadiusTopEnd,
  borderRadiusBottomStart,
  borderRadiusBottomEnd,

  flexDirection,
  alignItems,
  justifyContent,
  gap,

  ...props
}: BrickComponentProps<T>) => {
  const context = {
    margin,
    marginBlock,
    marginInline,
    marginStart,
    marginEnd,
    marginTop,
    marginBottom,

    padding,
    paddingBlock,
    paddingInline,
    paddingStart,
    paddingEnd,
    paddingTop,
    paddingBottom,

    backgroundColor,

    borderRadius,
    borderRadiusTopStart,
    borderRadiusTopEnd,
    borderRadiusBottomStart,
    borderRadiusBottomEnd,

    flexDirection,
    alignItems,
    justifyContent,
    gap,
  };
  // styles.useVariants(context)
  return <Component {...props} style={[styles.brick(context), props?.style]} />;
};

Brick.displayName = 'Brick';

const styles = StyleSheet.create(theme => {
  const variants = {
    margin: mapVariants(theme.spacings, 'margin'),
    marginBlock: mapVariants(theme.spacings, 'marginVertical'),
    marginInline: mapVariants(theme.spacings, 'marginHorizontal'),
    marginStart: mapVariants(theme.spacings, 'marginStart'),
    marginEnd: mapVariants(theme.spacings, 'marginEnd'),
    marginTop: mapVariants(theme.spacings, 'marginTop'),
    marginBottom: mapVariants(theme.spacings, 'marginBottom'),

    padding: mapVariants(theme.spacings, 'padding'),
    paddingBlock: mapVariants(theme.spacings, 'paddingVertical'),
    paddingInline: mapVariants(theme.spacings, 'paddingHorizontal'),
    paddingStart: mapVariants(theme.spacings, 'paddingStart'),
    paddingEnd: mapVariants(theme.spacings, 'paddingEnd'),
    paddingTop: mapVariants(theme.spacings, 'paddingTop'),
    paddingBottom: mapVariants(theme.spacings, 'paddingBottom'),

    backgroundColor: mapVariants(
      { ...theme.colors.background, ...theme.brand.colors },
      'backgroundColor',
    ),

    borderRadius: mapVariants(theme.borderRadiuses, 'borderRadius'),
    borderRadiusBottomStart: mapVariants(
      theme.borderRadiuses,
      'borderBottomStartRadius',
    ),
    borderRadiusBottomEnd: mapVariants(
      theme.borderRadiuses,
      'borderBottomEndRadius',
    ),
    borderRadiusTopStart: mapVariants(
      theme.borderRadiuses,
      'borderTopStartRadius',
    ),
    borderRadiusTopEnd: mapVariants(theme.borderRadiuses, 'borderTopEndRadius'),

    flexDirection: mapVariants(
      {
        row: 'row',
        column: 'column',
        rowReverse: 'row-reverse',
        columnReverse: 'column-reverse',
      },
      'flexDirection',
    ),
    alignItems: mapVariants(
      {
        stretch: 'stretch',
        center: 'center',
        flexStart: 'flex-start',
        flexEnd: 'flex-end',
      },
      'alignItems',
    ),
    justifyContent: mapVariants(
      {
        center: 'center',
        flexStart: 'flex-start',
        flexEnd: 'flex-end',
        spaceBetween: 'space-between',
        spaceAround: 'space-around',
        spaceEvenly: 'space-evenly',
      },
      'justifyContent',
    ),
    gap: mapVariants(theme.spacings, 'gap'),
  };
  return {
    brick: ctx => ({
      ...getVariants(ctx, variants),
      variants,
    }),
  };
});
