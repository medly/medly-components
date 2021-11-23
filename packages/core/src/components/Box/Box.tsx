import { CenterAlignedLoader } from '@medly-components/core';
import { ConcentricCircleLoader } from '@medly-components/loaders';
import { isValidStringOrNumber, WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Text from '../Text';
import { BoxStyled } from './Box.styled';
import { BoxProps } from './types';

const Component: FC<BoxProps> = React.memo(
    React.forwardRef((props, ref) => (
        <BoxStyled ref={ref} {...props}>
            {React.Children.map(props.children, c => {
                return isValidStringOrNumber(c) ? <Text textVariant={props.fontVariant!}>{c}</Text> : c;
            })}
            {props.isLoading && <CenterAlignedLoader loader={<ConcentricCircleLoader color={props.color!} size="XS" />} />}
        </BoxStyled>
    ))
);
Component.defaultProps = {
    px: 4,
    py: 4,
    bg: 'white',
    width: '80%',
    height: '40%',
    color: 'black',
    display: 'flex',
    fontVariant: 'body1'
};
Component.displayName = 'Box';
export const Box: FC<BoxProps> & WithStyle = Object.assign(Component, {
    Style: BoxStyled
});
