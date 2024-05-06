import { useCombinedRefs } from '@medly-components/utils';
import type { FCC } from 'react';
import { forwardRef, memo, useEffect, useRef, useState } from 'react';
import * as TextFieldStyled from '../../../TextField/Styled';
import { Props } from './types';

export const DateRangeTextField: FCC<Props> = memo(
    forwardRef((props: Props, ref) => {
        const [inputWidth, setInputWidth] = useState(0),
            { id, size, variant, dateMaskLabel, required, label, ...restProps } = props,
            inputRef = useCombinedRefs<HTMLInputElement>(ref, useRef(null));

        useEffect(() => {
            inputRef.current && setInputWidth(inputRef.current.offsetWidth);
        }, [inputRef.current]);

        return (
            <TextFieldStyled.InputWrapper id={`${id}-wrapper`} size={size} variant={variant}>
                <TextFieldStyled.Input
                    id={id}
                    isLabelPresent
                    ref={inputRef}
                    inputSize={size}
                    variant={variant}
                    required={required}
                    {...restProps}
                />
                <TextFieldStyled.MaskPlaceholder size={size} isLabelPresent variant={variant}>
                    {dateMaskLabel}
                </TextFieldStyled.MaskPlaceholder>
                <TextFieldStyled.Label htmlFor={id} inputWidth={inputWidth} size={size} variant={variant} required={required}>
                    {label}
                </TextFieldStyled.Label>
            </TextFieldStyled.InputWrapper>
        );
    })
);
DateRangeTextField.displayName = 'DateRangeTextField';
