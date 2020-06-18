import { CheckIcon, MinimizeIcon } from '@medly-components/icons';
import { useCombinedRefs, WithStyle } from '@medly-components/utils';
import React, { FC, useCallback, useMemo } from 'react';
import FieldWithLabel from '../FieldWithLabel';
import Text from '../Text';
import * as Styled from './Checkbox.styled';
import { Props } from './types';

export const Checkbox: FC<Props> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const {
            id,
            size,
            fullWidth,
            label,
            labelPosition,
            labelVariant,
            labelWeight,
            labelColor,
            indeterminate,
            onChange,
            hasError,
            ...restProps
        } = props;

        const inputId = useMemo(() => id || label, [id]),
            inputRef = useCombinedRefs<HTMLInputElement>(ref, React.useRef(null)),
            isActive = useMemo(() => restProps.checked || restProps.defaultChecked || indeterminate, [
                restProps.checked,
                restProps.defaultChecked,
                indeterminate
            ]);
        const changeHandler = useCallback(
            (e: any) => {
                e.stopPropagation();
                onChange && onChange(e);
            },
            [onChange]
        );

        return (
            <Styled.CheckboxWithLabelWrapper
                id={`${inputId}-wrapper`}
                htmlFor={inputId}
                fullWidth={fullWidth}
                labelPosition={labelPosition}
                isActive={isActive}
                hasError={hasError}
                disabled={restProps.disabled}
            >
                {label && (
                    <Text textVariant={labelVariant} textWeight={labelWeight} textColor={labelColor}>
                        {label}
                    </Text>
                )}
                <Styled.Wrapper
                    size={size}
                    disabled={restProps.disabled}
                    isActive={isActive}
                    hasError={hasError}
                    data-testid="checkbox-wrapper"
                >
                    <Styled.Checkbox ref={inputRef} id={inputId} onChange={changeHandler} indeterminate={indeterminate} {...restProps} />
                    {indeterminate ? <MinimizeIcon /> : <CheckIcon />}
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
