import { ChevronDownIcon } from '@medly-components/icons';
import { useCombinedRefs, useOuterClickNotifier, WithStyle } from '@medly-components/utils';
import React, { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { TextField } from '../TextField/TextField';
import { filterOptions, getDefaultSelectedOption, getUpdatedOptions } from './helpers';
import Options from './Options';
import * as Styled from './SingleSelect.styled';
import { Option, SelectProps } from './types';
import { useKeyboardNavigation } from './useKeyboardNavigation';

export const SingleSelect: FC<SelectProps> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const {
                id,
                value,
                onChange,
                options: defaultOptions,
                variant,
                minWidth,
                fullWidth,
                disabled,
                onFocus,
                onBlur,
                isSearchable,
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
            [options, setOptions] = useState(getUpdatedOptions(defaultOptions, defaultSelectedOption));

        const updateToDefaultOptions = useCallback(() => setOptions(getUpdatedOptions(defaultOptions, selectedOption)), [
            defaultOptions,
            selectedOption
        ]);

        const showOptions = useCallback(() => {
                setOptionsVisibilityState(true);
                // @ts-ignore
                inputRef.current.setSelectionRange(inputValue.length, inputValue.length);
                inputRef.current.focus();
            }, [inputValue]),
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
                    const target = event.target as HTMLInputElement,
                        newOptions = filterOptions(getUpdatedOptions(defaultOptions, selectedOption), target.value);
                    setInputValue(target.value);
                    newOptions.length && target.value ? setOptions(newOptions) : updateToDefaultOptions();
                    !areOptionsVisible && showOptions();
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
                    } else {
                        inputRef.current.focus();
                    }
                },
                [inputRef.current, onChange]
            ),
            handleOuterClick = useCallback(() => {
                if (areOptionsVisible) {
                    hideOptions();
                    updateToDefaultOptions();
                    setInputValue(defaultSelectedOption.label);
                }
            }, [areOptionsVisible, selectedOption, updateToDefaultOptions]),
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
                    setTimeout(() => !isFocused.current && hideOptions(), 150);
                },
                [onBlur]
            ),
            handleKeyPress = useCallback((event: React.KeyboardEvent) => !isSearchable && event.preventDefault(), [isSearchable]);

        useEffect(() => {
            const selected = getDefaultSelectedOption(defaultOptions, value);
            setInputValue(selected.label);
            setSelectedOption(selected);
            setOptions(getUpdatedOptions(defaultOptions, selected));
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

        return (
            <Styled.Wrapper
                id={`${selectId}-wrapper`}
                {...{ variant, disabled, minWidth, fullWidth }}
                ref={wrapperRef}
                isSearchable={isSearchable}
                isErrorPresent={!!props.errorText}
                onClick={toggleOptions}
                areOptionsVisible={areOptionsVisible}
            >
                <TextField
                    key={selectedOption.value}
                    variant={variant}
                    fullWidth
                    autoComplete="off"
                    id={`${selectId}`}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    disabled={disabled}
                    value={inputValue}
                    ref={inputRef}
                    onChange={handleInputChange}
                    suffix={ChevronDownIcon}
                    onKeyPress={handleKeyPress}
                    {...inputProps}
                />
                {!disabled && areOptionsVisible && (
                    <Options
                        ref={optionsRef}
                        variant={variant}
                        id={`${selectId}-options`}
                        options={options}
                        hasError={!!props.errorText}
                        onOptionClick={handleOptionClick}
                    />
                )}
            </Styled.Wrapper>
        );
    })
);

SingleSelect.displayName = 'SingleSelect';
SingleSelect.Style = Styled.Wrapper;
SingleSelect.defaultProps = {
    value: '',
    variant: 'filled',
    fullWidth: false,
    required: false,
    label: '',
    isSearchable: false,
    placeholder: 'Please Select . . .'
};
