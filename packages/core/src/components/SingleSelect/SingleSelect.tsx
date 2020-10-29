import { ChevronDownIcon } from '@medly-components/icons';
import { useCombinedRefs, useOuterClickNotifier, WithStyle } from '@medly-components/utils';
import React, { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import TextField from '../TextField';
import FlatVariant from './FlatVariant';
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
                maxWidth,
                includesNestedOptions,
                fullWidth,
                disabled,
                onFocus,
                onBlur,
                className,
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
                isSearchable && setInputValue('');
                inputRef.current.focus();
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
                    const target = event.target as HTMLInputElement,
                        newOptions = filterOptions(getUpdatedOptions(defaultOptions, selectedOption), target.value);
                    setInputValue(target.value);
                    newOptions.length && target.value ? setOptions(newOptions) : updateToDefaultOptions();
                    !areOptionsVisible && setOptionsVisibilityState(true);
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
                    setTimeout(() => !isFocused.current && hideOptions(), 250);
                },
                [onBlur]
            ),
            handleKeyPress = useCallback((event: React.KeyboardEvent) => !isSearchable && event.preventDefault(), [isSearchable]);

        useEffect(() => {
            const selected = getDefaultSelectedOption(defaultOptions, value);
            setInputValue(selected.label);
            setSelectedOption(selected);
            setOptions(getUpdatedOptions(defaultOptions, selected));
            value !== selected.value && onChange && onChange(selected.value || undefined);
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
            errorText: inputProps.errorText,
            onFocus: handleFocus,
            onBlur: handleBlur,
            onKeyPress: handleKeyPress,
            disabled,
            areOptionsVisible
        };

        return (
            <Styled.Wrapper
                id={`${selectId}-wrapper`}
                {...{ variant, disabled, minWidth, maxWidth, fullWidth }}
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
                        key={selectedOption.value}
                        variant={variant}
                        autoComplete="off"
                        onChange={handleInputChange}
                        suffix={ChevronDownIcon}
                        {...commonProps}
                        {...inputProps}
                        minWidth={minWidth}
                        maxWidth={maxWidth}
                    />
                )}
                {!disabled && areOptionsVisible && (
                    <Options
                        size={variant === 'flat' ? 'S' : inputProps.size}
                        ref={optionsRef}
                        variant={variant}
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

SingleSelect.displayName = 'SingleSelect';
SingleSelect.Style = Styled.Wrapper;
SingleSelect.defaultProps = {
    value: '',
    size: 'M',
    label: '',
    variant: 'filled',
    fullWidth: false,
    required: false,
    isSearchable: false,
    includesNestedOptions: false,
    placeholder: 'Please Select . . .'
};
