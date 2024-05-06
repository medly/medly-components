import { ConcentricCircleLoader } from '@medly-components/loaders';
import { isValidStringOrNumber, WithStyle } from '@medly-components/utils';
import type { FCC } from 'react';
import { Children, forwardRef, memo } from 'react';
import CenterAlignedLoader from '../CenterAlignedLoader';
import Text from '../Text';
import { BoxStyled } from './Box.styled';
import { BoxProps } from './types';

const Component: FCC<BoxProps> = memo(
    forwardRef((props, ref) => (
        <BoxStyled ref={ref} {...props}>
            {Children.map(props.children, c => {
                return isValidStringOrNumber(c) ? <Text textVariant={props.fontVariant}>{c}</Text> : c;
            })}
            {props.isLoading && <CenterAlignedLoader loader={<ConcentricCircleLoader color={props.color} size="XS" />} />}
        </BoxStyled>
    ))
);
Component.defaultProps = {
    px: 4,
    py: 4,
    bg: 'white',
    color: 'black',
    display: 'flex',
    borderRadius: 2,
    fontVariant: 'body2'
};
Component.displayName = 'Box';
export const Box: FCC<BoxProps> & WithStyle = Object.assign(Component, {
    Style: BoxStyled
});
