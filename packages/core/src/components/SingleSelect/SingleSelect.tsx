import { ChevronDownIcon } from '@medly-components/icons';
import { useCombinedRefs, useOuterClickNotifier, useUpdateEffect, WithStyle } from '@medly-components/utils';
import React, { FC, useCallback, useMemo, useRef, useState } from 'react';
import TextField from '../TextField';
import FlatVariant from './FlatVariant';
import { filterOptions, getDefaultSelectedOption, getUpdatedOptions } from './helpers';
import Options from './Options';
import * as Styled from './SingleSelect.styled';
import { Option, SelectProps } from './types';
import { useKeyboardNavigation } from './useKeyboardNavigation';

const Component: FC<SelectProps> = React.memo(
    React.forwardRef((props, ref) => {
        const {
                id,
                value,
                onChange,
                options: defaultOptions,
                variant,
                minWidth,
                maxWidth,
                includesNestedOptions,
                fullWidth,
                disabled,
                showDecorators,
                onFocus,
                onBlur,
                className,
                validator,
                isSearchable,
                suffix,
                ...inputProps
            } = props,
            selectId = useMemo(() => id || inputProps.label?.toLocaleLowerCase() || 'medly-singleSelect', [id, inputProps.label]),
            defaultSelectedOption = getDefaultSelectedOption(defaultOptions, value);

        const wrapperRef = useRef<HTMLDivElement>(null),
            optionsRef = useRef<HTMLUListElement>(null),
            inputRef = useCombinedRefs<HTMLInputElement>(ref, React.useRef(null)),
            isFocused = useRef(false),
            [areOptionsVisible, setOptionsVisibilityState] = useState(false),
            [inputValue, setInputValue] = useState(defaultSelectedOption.label),
            [selectedOption, setSelectedOption] = useState(defaultSelectedOption),
            [builtInErrorMessage, setErrorMessage] = useState(''),
            [options, setOptions] = useState(getUpdatedOptions(defaultOptions, defaultSelectedOption));

        const updateToDefaultOptions = useCallback(() => setOptions(getUpdatedOptions(defaultOptions, selectedOption)), [
            defaultOptions,
            selectedOption
        ]);

        const validate = useCallback(
            () =>
                setErrorMessage(
                    (validator && validator(inputRef.current?.value)) ||
                        (inputProps.required && !value && 'Please select one option.') ||
                        ''
                ),
            [inputProps.required, validator, value]
        );

        const showOptions = useCallback(() => {
                setOptionsVisibilityState(true);
                isSearchable && setInputValue('');
                inputRef.current?.focus();
            }, [isSearchable, inputValue]),
            hideOptions = useCallback(() => {
                setOptionsVisibilityState(false);
                inputRef.current && inputRef.current.blur();
            }, []),
            toggleOptions = useCallback(() => !disabled && (areOptionsVisible ? hideOptions() : showOptions()), [
                disabled,
                areOptionsVisible
            ]),
            handleInputChange = useCallback(
                (event: React.ChangeEvent<HTMLInputElement>) => {
                    const { value: inputValue } = event.target as HTMLInputElement,
                        newOptions = filterOptions(getUpdatedOptions(defaultOptions, selectedOption), inputValue);
                    setInputValue(inputValue);
                    newOptions.length && inputValue ? setOptions(newOptions) : updateToDefaultOptions();
                    if (newOptions.length === 1 && newOptions[0].label === inputValue) {
                        !areOptionsVisible && onChange && onChange(newOptions[0].value);
                    } else if (!areOptionsVisible) {
                        setOptionsVisibilityState(true);
                    }
                },
                [areOptionsVisible, defaultOptions, selectedOption, updateToDefaultOptions]
            ),
            selectOption = useCallback(
                (option: Option) => {
                    setSelectedOption(option);
                    setOptions(getUpdatedOptions(options, option));
                },
                [options]
            ),
            handleOptionClick = useCallback(
                (option: Option) => {
                    if (!option.disabled && !Array.isArray(option.value)) {
                        selectOption(option);
                        setInputValue(option.label);
                        hideOptions();
                        onChange && onChange(option.value);
                        setErrorMessage('');
                    } else {
                        inputRef.current?.focus();
                    }
                },
                [inputRef.current, onChange]
            ),
            handleOuterClick = useCallback(() => {
                if (areOptionsVisible) {
                    hideOptions();
                    validate();
                    updateToDefaultOptions();
                    setInputValue(defaultSelectedOption.label);
                }
            }, [areOptionsVisible, selectedOption, updateToDefaultOptions, validate]),
            handleFocus = useCallback(
                (event: React.FocusEvent<HTMLInputElement>) => {
                    isFocused.current = true;
                    onFocus && onFocus(event);
                },
                [onFocus]
            ),
            handleBlur = useCallback(
                (event: React.FocusEvent<HTMLInputElement>) => {
                    isFocused.current = false;
                    onBlur && onBlur(event);
                    setTimeout(() => !isFocused.current && hideOptions(), 250);
                },
                [onBlur]
            ),
            inputValidator = useCallback(() => '', []),
            handleKeyPress = useCallback((event: React.KeyboardEvent) => !isSearchable && event.preventDefault(), [isSearchable]);

        useUpdateEffect(() => {
            const selected = getDefaultSelectedOption(defaultOptions, value);
            setInputValue(selected.label);
            setSelectedOption(selected);
            setOptions(getUpdatedOptions(defaultOptions, selected));
            value && value !== selected.value && onChange && onChange(selected.value);
        }, [defaultOptions, value]);

        useKeyboardNavigation({
            isFocused,
            selectedOption,
            options,
            areOptionsVisible,
            setOptions,
            handleOptionClick,
            showOptions,
            optionsRef
        });

        useOuterClickNotifier(() => {
            handleOuterClick();
        }, wrapperRef);

        const commonProps = {
            id: `${selectId}`,
            ref: inputRef,
            value: inputValue,
            label: inputProps.label,
            helperText: inputProps.helperText,
            errorText: inputProps.errorText || builtInErrorMessage,
            onFocus: handleFocus,
            onBlur: handleBlur,
            onKeyPress: handleKeyPress,
            disabled,
            showDecorators,
            areOptionsVisible,
            onInvalid: validate,
            validator: inputValidator
        };

        return (
            <Styled.Wrapper
                id={`${selectId}-wrapper`}
                {...{ disabled, minWidth, maxWidth, fullWidth }}
                variant={variant!}
                ref={wrapperRef}
                className={className}
                isSearchable={isSearchable}
                isErrorPresent={!!props.errorText}
                onClick={toggleOptions}
                areOptionsVisible={areOptionsVisible}
            >
                {variant == 'flat' ? (
                    <FlatVariant {...commonProps} />
                ) : (
                    <TextField
                        fullWidth
                        variant={variant}
                        autoComplete="off"
                        onChange={handleInputChange}
                        suffix={suffix || ChevronDownIcon}
                        {...inputProps}
                        {...commonProps}
                        minWidth={minWidth}
                        maxWidth={maxWidth}
                        readOnly={!inputProps.required && !isSearchable}
                    />
                )}
                {!disabled && areOptionsVisible && (
                    <Options
                        size={variant === 'flat' ? 'S' : inputProps.size!}
                        ref={optionsRef}
                        variant={variant!}
                        id={`${selectId}-options`}
                        options={options}
                        hasError={!!props.errorText}
                        onOptionClick={handleOptionClick}
                        maxWidth={maxWidth}
                        includesNestedOptions={includesNestedOptions}
                    />
                )}
            </Styled.Wrapper>
        );
    })
);

Component.displayName = 'SingleSelect';
Component.defaultProps = {
    value: '',
    size: 'M',
    label: '',
    minWidth: '20rem',
    variant: 'filled',
    fullWidth: false,
    required: false,
    isSearchable: false,
    includesNestedOptions: false,
    placeholder: 'Please Select . . .',
    showDecorators: true
};
export const SingleSelect: FC<SelectProps> & WithStyle = Object.assign(Component, { Style: Styled.Wrapper });
