import { WithStyle } from '@medly-components/utils';
import React, { SFC, useMemo } from 'react';
import { TextStyled } from './Text.styled';
import { Props } from './types';

export const Text: SFC<Props> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const componentType = useMemo(() => (props.textWeight === 'Strong' ? 'strong' : 'span'), [props.textWeight]);
        return (
            <TextStyled {...props} as={componentType} ref={ref}>
                {props.children}
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
