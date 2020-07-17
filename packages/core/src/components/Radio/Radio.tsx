import { useCombinedRefs, WithStyle } from '@medly-components/utils';
import React, { FC, useMemo } from 'react';
import { SelectorLabel } from '../Selectors';
import * as Styled from './Radio.styled';
import { Props } from './types';

export const Radio: FC<Props> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const { id, size, label, labelPosition, fullWidth, hasError, labelVariant, labelWeight, ...inputProps } = props,
            inputId = useMemo(() => id || label, [id, label]),
            inputRef = useCombinedRefs<HTMLInputElement>(ref, React.useRef(null)),
            isActive = useMemo(() => inputProps.checked || inputProps.defaultChecked, [inputProps.checked, inputProps.defaultChecked]);

        return (
            <Styled.RadioWithLabelWrapper
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

Radio.displayName = 'Radio';
Radio.Style = Styled.RadioWithLabelWrapper;
Radio.defaultProps = {
    label: '',
    labelPosition: 'right'
};
