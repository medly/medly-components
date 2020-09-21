import React, { FC } from 'react';
import Calendar from '../Calendar';
import * as TextStyled from '../TextField/Styled';
import * as Styled from './DateRangePicker.styled';
import { Props } from './types';

export const DateRangePicker: FC<Props> = React.memo(props => {
    const { id, value, minWidth, fullWidth, ...restProps } = props;
    const inputId =
        id ||
        props.fromLabel.toLowerCase().replace(/\s/g, '') ||
        props.toLabel.toLowerCase().replace(/\s/g, '') ||
        'medly-date-range-picker';
    const isFromLabelPresent = React.useMemo(() => !!props.fromLabel, [props.fromLabel]);
    const isToLabelPresent = React.useMemo(() => !!props.toLabel, [props.toLabel]);
    const isErrorPresent = false;
    return (
        <Styled.MainWrapperComponent>
            <Styled.OuterWrapper id={`${inputId}-input-wrapper`} fullWidth={fullWidth} minWidth={minWidth}>
                <Styled.InnerWrapper
                    size={props.size}
                    onClick={() => {}}
                    variant={props.variant}
                    disabled={props.disabled}
                    isErrorPresent={isErrorPresent}
                    isLabelPresent={isToLabelPresent || isFromLabelPresent}
                >
                    <TextStyled.InputWrapper>
                        <Styled.Input
                            // ref={inputRef}
                            id={`${inputId}-from-input`}
                            aria-describedby={`${inputId}-from-helper-text`}
                            required={props.required}
                            disabled={props.disabled}
                            placeholder={props.placeholder || ' '}
                            isLabelPresent={isFromLabelPresent}
                            value={value.startDate}
                            {...restProps}
                            // isPrefixPresent={isPrefixPresent}
                            // isSuffixPresent={isSuffixPresent}
                            // errorText={errorText || builtInErrorMessage}
                        />
                        <Styled.Label htmlFor={`${inputId}-from-input`} size={'M'} variant={'filled'} required={false}>
                            {props.fromLabel}
                        </Styled.Label>
                    </TextStyled.InputWrapper>
                    <Styled.InputSeparator />
                    <TextStyled.InputWrapper>
                        <Styled.Input
                            // ref={inputRef}
                            id={`${inputId}-to-input`}
                            aria-describedby={`${inputId}-to-helper-text`}
                            required={props.required}
                            disabled={props.disabled}
                            placeholder={props.placeholder || ' '}
                            isLabelPresent={isToLabelPresent}
                            value={value.endDate}
                            {...restProps}
                            // isPrefixPresent={isPrefixPresent}
                            // isSuffixPresent={isSuffixPresent}
                            // errorText={errorText || builtInErrorMessage}
                        />
                        <Styled.Label htmlFor={`${inputId}-to-input`} size={'M'} variant={'filled'} required={false}>
                            {props.toLabel}
                        </Styled.Label>
                    </TextStyled.InputWrapper>
                </Styled.InnerWrapper>
                {/* {(isErrorPresent || helperText) && (
                <TextStyled.HelperText id={`${id}-helper-text`} onClick={stopPropagation} size={size}>
                    {errorText || builtInErrorMessage || helperText}
                </TextStyled.HelperText>
            )} */}
            </Styled.OuterWrapper>
            <Styled.CalendarWrapper>
                <Calendar
                    id={`${inputId}-from-calendar`}
                    date={value.startDate}
                    onChange={() => {}}
                    minSelectableDate={props.minSelectableDate ?? undefined}
                    maxSelectableDate={props.maxSelectableDate ?? undefined}
                />
                <Calendar
                    id={`${inputId}-to-calendar`}
                    date={value.startDate}
                    onChange={() => {}}
                    minSelectableDate={props.minSelectableDate ?? undefined}
                    maxSelectableDate={props.maxSelectableDate ?? undefined}
                />
            </Styled.CalendarWrapper>
        </Styled.MainWrapperComponent>
    );
});

DateRangePicker.displayName = 'DateRangePicker';
DateRangePicker.defaultProps = {};
