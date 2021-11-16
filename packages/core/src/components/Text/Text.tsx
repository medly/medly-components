import { WithStyle } from '@medly-components/utils';
import { forwardRef, memo, useMemo } from 'react';
import { TextStyled } from './Text.styled';
import { TextProps } from './types';
import type { FC } from 'react';

const Component: FC<TextProps> = memo(
    forwardRef(({ as, textVariant, textWeight, textAlign, children, ...restProps }, ref) => {
        const componentType = useMemo(() => {
            let type: keyof JSX.IntrinsicElements | React.ComponentType<any> = (textVariant as keyof JSX.IntrinsicElements) || 'span';

            if (
                !textVariant ||
                textVariant === 'body1' ||
                textVariant == 'body2' ||
                textVariant == 'body3' ||
                textVariant == 'button1' ||
                textVariant == 'button2'
            ) {
                type = textWeight === 'Strong' || textWeight === 'ExtraStrong' ? 'strong' : 'span';
            }

            return type;
        }, [textWeight, textVariant]);
        return (
            <TextStyled {...{ textVariant, textWeight, textAlign, ...restProps }} as={as || componentType} ref={ref}>
                {children}
            </TextStyled>
        );
    })
);

Component.defaultProps = {
    lineThrough: false,
    uppercase: false,
    fullWidth: false,
    textColor: 'inherit',
    textAlign: 'initial'
};
Component.displayName = 'Text';
export const Text: FC<TextProps> & WithStyle = Object.assign(Component, { Style: TextStyled });
