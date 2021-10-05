import { ChevronDownIcon, DateRangeIcon } from '@medly-components/icons';
import React, { useEffect } from 'react';
import { DateIconWrapper as IconWrapper } from '../../DatePicker/DatePicker.styled';
import datePickerPattern from '../../DatePicker/datePickerPattern';
import { HelperAndErrorTextTooltip } from '../../HelperAndErrorTextTooltip/HelperAndErrorTextTooltip';
import * as TextFieldStyled from '../../TextField/Styled';
import { PopoverTypes } from '../types';
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
            showDecorators,
            isActive,
            startDateRef,
            endDateRef,
            errorText,
            required,
            helperText,
            displayFormat,
            startDateLabel,
            endDateLabel,
            showTooltipForHelperAndErrorText,
            showChevronIcon,
            activePopover,
            onCustomRangeIconClick,
            outerClickValidator
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
            errorText: errorText || builtInErrorMessage,
            pattern: datePickerPattern[displayFormat]
        },
        iconProps = {
            variant,
            isErrorPresent,
            disabled,
            size,
            isActive
        };

    const Prefix = () => (
        <IconWrapper {...iconProps}>
            <DateRangeIcon id={`${id}-calendar-icon`} title={`${id}-calendar-icon`} onClick={onIconClick} size={size} />
        </IconWrapper>
    );

    const Suffix = () => (
        <IconWrapper {...iconProps}>
            <ChevronDownIcon
                id={`${id}-custom-date-range-options-icon`}
                title={`${id}-custom-date-range-options-icon`}
                onClick={onCustomRangeIconClick}
                size={size}
            />
        </IconWrapper>
    );

    useEffect(() => {
        // @ts-ignore
        outerClickValidator.current = validateOnWrapperBlur;
    }, [validateOnWrapperBlur]);

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
                showChevronIcon={showChevronIcon}
                areCustomOptionsVisible={!!isActive && activePopover === PopoverTypes.CUSTOM_RANGE_OPTIONS}
            >
                {showDecorators && (
                    <TextFieldStyled.Prefix size={size}>
                        <Prefix />
                    </TextFieldStyled.Prefix>
                )}
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
                {showTooltipForHelperAndErrorText && (
                    <HelperAndErrorTextTooltip id={id} errorText={errorText || builtInErrorMessage} helperText={helperText} />
                )}
                {showChevronIcon && (
                    <TextFieldStyled.Suffix size={size}>
                        <Suffix />
                    </TextFieldStyled.Suffix>
                )}
            </Wrapper>
            {showDecorators && !showTooltipForHelperAndErrorText && (
                <TextFieldStyled.HelperText id={`${id}-helper-text`} variant={variant} onClick={stopPropagation} size={size}>
                    {errorText || builtInErrorMessage || helperText}
                </TextFieldStyled.HelperText>
            )}
        </>
    );
});
DateRangeTextFields.displayName = 'DateRangeTextFields';
