import { WithStyle } from '@medly-components/utils';
import { memo, forwardRef } from 'react';
import FieldWithLabel from '../FieldWithLabel';
import * as Styled from './Input.styled';
import { InputProps } from './types';
import type { FC } from 'react';

const Component: FC<InputProps> = memo(
    forwardRef((props, ref) => {
        const { description, label, labelPosition, fullWidth, required, descriptionColor, prefix, suffix, ...restProps } = props,
            id = props.id || 'medly-input';
        return (
            <FieldWithLabel id={`${id}-field`} {...{ fullWidth, labelPosition }}>
                {label && (
                    <FieldWithLabel.Label htmlFor={id} {...{ required, labelPosition }}>
                        {label}
                    </FieldWithLabel.Label>
                )}
                <Styled.Wrapper fullWidth={fullWidth}>
                    {prefix && <Styled.Prefix>{prefix}</Styled.Prefix>}
                    <Styled.Input id={id} ref={ref} required={required} fullWidth={fullWidth} {...restProps} />
                    {suffix && <Styled.Suffix>{suffix}</Styled.Suffix>}
                </Styled.Wrapper>
                {description && <FieldWithLabel.Description textColor={descriptionColor}>{description}</FieldWithLabel.Description>}
            </FieldWithLabel>
        );
    })
);

Component.displayName = 'Input';
Component.defaultProps = {
    type: 'text',
    disabled: false,
    fullWidth: false,
    required: false,
    label: '',
    labelPosition: 'top',
    description: ''
};
export const Input: FC<InputProps> & WithStyle = Object.assign(Component, { Style: Styled.Input });
