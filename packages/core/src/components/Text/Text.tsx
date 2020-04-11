import { WithStyle } from '@medly-components/utils';
import React, { SFC, useMemo } from 'react';
import { TextStyled } from './Text.styled';
import { Props } from './types';

export const Text: SFC<Props> & WithStyle = React.memo(
    React.forwardRef(({ as, textVariant, textWeight, children, ...restProps }, ref) => {
        const componentType = useMemo(() => {
            let type: keyof JSX.IntrinsicElements | React.ComponentType<any> = 'span';

            if (textVariant === 'body1' || textVariant == 'body2') {
                type = textWeight === 'Strong' || textWeight === 'ExtraStrong' ? 'strong' : 'span';
            } else {
                type = textVariant;
            }

            return type;
        }, [textWeight, textVariant]);
        return (
            <TextStyled {...{ textVariant, textWeight, ...restProps }} as={as || componentType} ref={ref}>
                {children}
            </TextStyled>
        );
    })
);

Text.defaultProps = {
    lineThrough: false,
    uppercase: false,
    fullWidth: false,
    textColor: 'inherit'
};
Text.displayName = 'Text';
Text.Style = TextStyled;
