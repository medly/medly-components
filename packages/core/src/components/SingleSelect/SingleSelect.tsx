import { ChevronDownIcon } from '@medly-components/icons';
import { useCombinedRefs, useKeyPress, useOuterClickNotifier, WithStyle } from '@medly-components/utils';
import React, { SFC, useCallback, useEffect, useRef, useState } from 'react';
import { TextField } from '../TextField/TextField';
import { filterOptions, getDefaultSelectedOption, getNextOption, getOptionsWithSelected, getPrevOption } from './helpers';
import Options from './Options';
import * as Styled from './SingleSelect.styled';
import { Option, SelectProps } from './types';

export const SingleSelect: SFC<SelectProps> & WithStyle = React.memo(
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
            selectId = id || 'medly-singleSelect',
            defaultSelectedOption = getDefaultSelectedOption(defaultOptions, value);

        const wrapperRef = useRef<HTMLDivElement>(null),
            optionsRef = useRef<HTMLUListElement>(null),
            inputRef = useCombinedRefs<HTMLInputElement>(ref, React.useRef(null)),
            downPress = useKeyPress('ArrowDown'),
            upPress = useKeyPress('ArrowUp'),
            enterPress = useKeyPress('Enter'),
            [isFocused, setFocusedState] = useState(false),
            [areOptionsVisible, setOptionsVisibilityState] = useState(false),
            [inputValue, setInputValue] = useState(defaultSelectedOption.label),
            [selectedOption, setSelectedOption] = useState(defaultSelectedOption),
            [options, setOptions] = useState(getOptionsWithSelected(defaultOptions, defaultSelectedOption));

        const updateToDefaultOptions = useCallback(() => setOptions(getOptionsWithSelected(defaultOptions, selectedOption)), [
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
            toggleOptions = useCallback(() => {
                if (!disabled) {
                    areOptionsVisible ? hideOptions() : showOptions();
                }
            }, [disabled, areOptionsVisible]),
            handleInputChange = useCallback(
                (event: React.ChangeEvent<HTMLInputElement>) => {
                    const target = event.target as HTMLInputElement;
                    setInputValue(target.value);
                    const newOptions = filterOptions(getOptionsWithSelected(defaultOptions, selectedOption), target.value);
                    newOptions.length && target.value ? setOptions(newOptions) : updateToDefaultOptions();
                    !areOptionsVisible && showOptions();
                },
                [areOptionsVisible, defaultOptions, selectedOption, updateToDefaultOptions]
            ),
            selectOption = useCallback(
                (option: Option) => {
                    setSelectedOption(option);
                    setOptions(getOptionsWithSelected(options, option));
                },
                [options]
            ),
            handleOptionClick = useCallback(
                (option: Option) => {
                    if (!option.disabled) {
                        selectOption(option);
                        setInputValue(option.label);
                        hideOptions();
                        onChange && onChange(option.value);
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
            handleFocus = useCallback((event: React.FocusEvent<HTMLInputElement>) => {
                setFocusedState(true);
                onFocus && onFocus(event);
            }, []),
            handleBlur = useCallback(
                (event: React.FocusEvent<HTMLInputElement>) => {
                    setFocusedState(false);
                    areOptionsVisible && setTimeout(() => hideOptions(), 100);
                    onBlur && onBlur(event);
                },
                [areOptionsVisible, onBlur]
            );

        useEffect(() => {
            const selected = getDefaultSelectedOption(defaultOptions, value);
            setInputValue(selected.label);
            setSelectedOption(selected);
            setOptions(getOptionsWithSelected(defaultOptions, selected));
        }, [defaultOptions, value]);

        useEffect(() => {
            if (downPress && isFocused) {
                areOptionsVisible ? selectOption(getNextOption(selectedOption, options)) : showOptions();
            }
        }, [downPress, isFocused, areOptionsVisible]);

        useEffect(() => {
            if (upPress && isFocused) {
                areOptionsVisible ? selectOption(getPrevOption(selectedOption, options)) : showOptions();
            }
        }, [upPress, isFocused, areOptionsVisible]);

        useEffect(() => {
            if (enterPress && optionsRef.current) {
                options.length > 0 && options.find(op => selectedOption.value === op.value) && handleOptionClick(selectedOption);
            }
        }, [enterPress]);

        useOuterClickNotifier(() => {
            handleOuterClick();
        }, wrapperRef);

        return (
            <Styled.Wrapper
                {...{ variant, disabled, minWidth, fullWidth }}
                ref={wrapperRef}
                isSearchable={isSearchable}
                isErrorPresent={!!props.errorText}
                onClick={toggleOptions}
                withBuiltInValidation={inputProps.withBuiltInValidation}
                areOptionsVisible={areOptionsVisible}
            >
                <TextField
                    readOnly={!isSearchable}
                    variant={variant}
                    fullWidth
                    autoComplete="off"
                    id={selectId}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    disabled={disabled}
                    value={inputValue}
                    ref={inputRef}
                    onChange={handleInputChange}
                    suffix={ChevronDownIcon}
                    {...inputProps}
                />
                {!disabled && areOptionsVisible && (
                    <Options
                        ref={optionsRef}
                        variant={variant}
                        id={`${selectId}-options`}
                        options={options}
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
