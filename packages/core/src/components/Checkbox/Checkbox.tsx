import { CheckMaterialIcon, MinimizeIcon } from '@medly-components/icons';
import { useCombinedRefs, WithStyle } from '@medly-components/utils';
import React, { SFC, useCallback } from 'react';
import FieldWithLabel from '../FieldWithLabel';
import * as Styled from './Checkbox.styled';
import { Props } from './types';

export const Checkbox: SFC<Props> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const {
            id,
            size,
            label,
            required,
            labelPosition,
            labelVariant,
            labelWeight,
            fullWidth,
            indeterminate,
            onChange,
            ...restProps
        } = props;

        const inputRef = useCombinedRefs<HTMLInputElement>(ref, React.useRef(null));

        const changeHandler = useCallback(
            (e: any) => {
                e.stopPropagation();
                onChange && onChange(e);
            },
            [onChange]
        );

        return (
            <Styled.CheckboxWithLabelWrapper
                id={`${label}-checkbox`}
                fieldWithMaxContent
                {...{ fullWidth, labelPosition }}
                hasError={restProps.hasError}
                disabled={restProps.disabled}
            >
                {label && (
                    <FieldWithLabel.Label
                        showPointer={!restProps.disabled}
                        {...{ required, labelPosition, labelVariant, labelWeight }}
                        htmlFor={id || label}
                    >
                        {label}
                    </FieldWithLabel.Label>
                )}
                <Styled.Wrapper
                    size={size}
                    disabled={restProps.disabled}
                    isActive={restProps.checked || restProps.defaultChecked}
                    hasError={restProps.hasError}
                    data-testid="checkbox-wrapper"
                >
                    <Styled.Checkbox ref={inputRef} id={id || label} required={required} onChange={changeHandler} {...restProps} />
                    {indeterminate ? <MinimizeIcon /> : <CheckMaterialIcon onClick={changeHandler}></CheckMaterialIcon>}
                </Styled.Wrapper>
            </Styled.CheckboxWithLabelWrapper>
        );
    })
);

Checkbox.displayName = 'Checkbox';
Checkbox.Style = FieldWithLabel.Style;
Checkbox.defaultProps = {
    label: '',
    required: false,
    labelPosition: 'right'
};
