import { DateRangeIcon } from '@medly-components/icons';
import React from 'react';
import { DateIconWrapper } from '../../DatePicker/DatePicker.styled';
import * as TextFieldStyled from '../../TextField/Styled';
import DateRangeTextField from './DateRangeTextField';
import { Wrapper } from './DateRangeTextFields.styled';
import InputSeparator from './InputSeparator';
import { Props } from './types';
import { useDateRangeTextFieldsHandlers } from './useDateRangeTextFieldsHandlers';

export const DateRangeTextFields: React.FC<Props> = React.memo(props => {
    const {
            id,
            size,
            variant,
            disabled,
            isActive,
            startDateRef,
            endDateRef,
            errorText,
            required,
            helperText,
            startDateLabel,
            endDateLabel
        } = props,
        {
            mask,
            startDateText,
            endDateText,
            startDateMaskLabel,
            endDateMaskLabel,
            isErrorPresent,
            builtInErrorMessage,
            stopPropagation,
            onIconClick,
            onTextFieldFocus,
            handleTextChange,
            validateOnTextFieldBlur,
            validateOnTextFieldInvalid,
            validateOnWrapperBlur
        } = useDateRangeTextFieldsHandlers(props),
        commonTextProps = {
            variant,
            size,
            disabled,
            required,
            onFocus: onTextFieldFocus,
            onBlur: validateOnTextFieldBlur,
            onInvalid: validateOnTextFieldInvalid,
            placeholder: mask,
            onChange: handleTextChange,
            errorText: errorText || builtInErrorMessage
        },
        iconProps = {
            variant,
            isErrorPresent,
            disabled,
            size,
            isActive
        };

    const Prefix = () => (
        <DateIconWrapper {...iconProps}>
            <DateRangeIcon id={`${id}-calendar-icon`} onClick={onIconClick} size={size} />
        </DateIconWrapper>
    );

    return (
        <>
            <Wrapper
                id={`${id}-textFields`}
                size={size}
                variant={variant}
                disabled={disabled}
                isErrorPresent={isErrorPresent}
                isLabelPresent
                isActive={isActive}
                onBlur={validateOnWrapperBlur}
            >
                <TextFieldStyled.Prefix size={size}>
                    <Prefix />
                </TextFieldStyled.Prefix>
                <DateRangeTextField
                    ref={startDateRef}
                    id={`${id}-startDate-input`}
                    value={startDateText}
                    name="START_DATE"
                    isPrefixPresent
                    dateMaskLabel={startDateMaskLabel}
                    label={startDateLabel}
                    {...commonTextProps}
                />
                <InputSeparator {...iconProps} />
                <DateRangeTextField
                    ref={endDateRef}
                    id={`${id}-endDate-input`}
                    value={endDateText}
                    name="END_DATE"
                    dateMaskLabel={endDateMaskLabel}
                    label={endDateLabel}
                    {...commonTextProps}
                />
            </Wrapper>
            <TextFieldStyled.HelperText id={`${id}-helper-text`} variant={variant} onClick={stopPropagation} size={size}>
                {errorText || builtInErrorMessage || helperText}
            </TextFieldStyled.HelperText>
        </>
    );
});
DateRangeTextFields.displayName = 'DateRangeTextFields';
