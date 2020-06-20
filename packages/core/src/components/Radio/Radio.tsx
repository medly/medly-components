import { useCombinedRefs, WithStyle } from '@medly-components/utils';
import React, { FC, useMemo } from 'react';
import Text from '../Text';
import * as Styled from './Radio.styled';
import { Props } from './types';

export const Radio: FC<Props> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const { id, size, label, labelPosition, fullWidth, hasError, labelVariant, labelWeight, ...inputProps } = props,
            inputId = useMemo(() => id || label, [id, label]),
            inputRef = useCombinedRefs<HTMLInputElement>(ref, React.useRef(null));

        return (
            <Styled.RadioWithLabelWrapper
                id={`${inputId}-wrapper`}
                disabled={inputProps.disabled}
                required={inputProps.required}
                {...{ fullWidth, labelPosition, hasError }}
            >
                {label && (
                    <Text id={`${inputId}-label`} textVariant={labelVariant} textWeight={labelWeight}>
                        {label}
                    </Text>
                )}
                <Styled.RadioWrapper size={size}>
                    <Styled.HiddenRadio id={inputId} ref={inputRef} hasError={hasError} {...inputProps} />
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
