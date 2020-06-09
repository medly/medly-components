import { CheckMaterialIcon } from '@medly-components/icons';
import { useCombinedRefs, WithStyle } from '@medly-components/utils';
import React, { SFC, useCallback, useState } from 'react';
import FieldWithLabel from '../FieldWithLabel';
import * as Styled from './Checkbox.styled';
import { Props } from './types';

export const Checkbox: SFC<Props> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const { id, size, label, required, labelPosition, labelVariant, labelWeight, fullWidth, onChange, ...restProps } = props;

        const inputRef = useCombinedRefs<HTMLInputElement>(ref, React.useRef(null)),
            [isActive, setActiveState] = useState(restProps.checked || restProps.defaultChecked);

        const changeHandler = useCallback(
            (e: any) => {
                e.stopPropagation();
                setActiveState((e.target as HTMLInputElement).checked);
                onChange && onChange(e);
            },
            [onChange]
        );

        return (
            <Styled.CheckboxWithLabelWrapper
                id={`${label}-checkbox`}
                fieldWithMaxContent
                {...{ fullWidth, labelPosition }}
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
                <Styled.Wrapper size={size} disabled={restProps.disabled} isActive={isActive} error={restProps.error}>
                    <Styled.Checkbox ref={inputRef} id={id || label} required={required} onChange={changeHandler} {...restProps} />
                    <CheckMaterialIcon onClick={changeHandler} />
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
