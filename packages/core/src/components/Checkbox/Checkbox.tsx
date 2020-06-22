import { CheckIcon, MinimizeIcon } from '@medly-components/icons';
import { useCombinedRefs, WithStyle } from '@medly-components/utils';
import React, { FC, useMemo } from 'react';
import { SelectorLabel } from '../Selectors';
import * as Styled from './Checkbox.styled';
import { Props } from './types';
export const Checkbox: FC<Props> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const { id, size, fullWidth, label, labelPosition, labelVariant, labelWeight, indeterminate, hasError, ...inputProps } = props;

        const inputId = useMemo(() => id || label, [id, label]),
            inputRef = useCombinedRefs<HTMLInputElement>(ref, React.useRef(null)),
            isActive = useMemo(() => inputProps.checked || inputProps.defaultChecked || indeterminate, [
                inputProps.checked,
                inputProps.defaultChecked,
                indeterminate
            ]);

        return (
            <Styled.CheckboxWithLabelWrapper
                id={`${inputId}-wrapper`}
                htmlFor={inputId}
                isActive={isActive}
                disabled={inputProps.disabled}
                {...{ fullWidth, hasError, labelPosition }}
            >
                {label && (
                    <SelectorLabel
                        id={`${inputId}-label`}
                        type="checkbox"
                        labelPosition={labelPosition}
                        textVariant={labelVariant}
                        textWeight={labelWeight}
                    >
                        {label}
                    </SelectorLabel>
                )}
                <Styled.CheckboxWrapper size={size}>
                    <Styled.HiddenCheckbox ref={inputRef} id={inputId} indeterminate={indeterminate} hasError={hasError} {...inputProps} />
                    <Styled.StyledCheckbox>{indeterminate ? <MinimizeIcon /> : <CheckIcon />}</Styled.StyledCheckbox>
                </Styled.CheckboxWrapper>
            </Styled.CheckboxWithLabelWrapper>
        );
    })
);

Checkbox.displayName = 'Checkbox';
Checkbox.Style = Styled.CheckboxWithLabelWrapper;
Checkbox.defaultProps = {
    label: '',
    labelPosition: 'right'
};
