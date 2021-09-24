import { useCombinedRefs, WithStyle } from '@medly-components/utils';
import React, { FC, useMemo } from 'react';
import { SelectorLabel } from '../Selectors';
import * as Styled from './Radio.styled';
import { RadioProps } from './types';

const Component: FC<RadioProps> = React.memo(
    React.forwardRef((props, ref) => {
        const { id, size, label, labelPosition, fullWidth, hasError, labelVariant, labelWeight, className, ...inputProps } = props,
            inputId = useMemo(() => id || label, [id, label]),
            inputRef = useCombinedRefs<HTMLInputElement>(ref, React.useRef(null)),
            isActive = useMemo(() => inputProps.checked || inputProps.defaultChecked, [inputProps.checked, inputProps.defaultChecked]);

        return (
            <Styled.RadioWithLabelWrapper
                className={className}
                id={`${inputId}-wrapper`}
                htmlFor={inputId}
                disabled={inputProps.disabled}
                {...{ fullWidth, labelPosition, hasError, isActive }}
            >
                {label && (
                    <SelectorLabel
                        id={`${inputId}-label`}
                        type="radio"
                        hasError={hasError}
                        disabled={inputProps.disabled}
                        labelPosition={labelPosition}
                        textVariant={labelVariant}
                        textWeight={labelWeight}
                    >
                        {label}
                    </SelectorLabel>
                )}
                <Styled.RadioWrapper size={size}>
                    <Styled.HiddenRadio id={inputId} size={size} ref={inputRef} hasError={hasError} {...inputProps} />
                    <Styled.StyledRadio />
                </Styled.RadioWrapper>
            </Styled.RadioWithLabelWrapper>
        );
    })
);

Component.displayName = 'Radio';
Component.defaultProps = { label: '', labelPosition: 'right' };
export const Radio: FC<RadioProps> & WithStyle = Object.assign(Component, { Style: Styled.RadioWithLabelWrapper });
