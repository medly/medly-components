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
        const { id, value, onChange, options: defaultOptions, variant, minWidth, fullWidth, disabled, ...inputProps } = props,
            selectId = id || 'medly-singleSelect',
            defaultSelectedOption = getDefaultSelectedOption(defaultOptions, value);

        const wrapperRef = useRef<HTMLDivElement>(null),
            optionsRef = useRef<HTMLUListElement>(null),
            inputRef = useCombinedRefs<HTMLInputElement>(ref, React.useRef(null)),
            downPress = useKeyPress('ArrowDown'),
            upPress = useKeyPress('ArrowUp'),
            enterPress = useKeyPress('Enter'),
            [inputValue, setInputValue] = useState(defaultSelectedOption.label),
            [areOptionsVisible, setOptionsVisibilityState] = useState(false),
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
            hideOptions = useCallback(() => setOptionsVisibilityState(false), []),
            handleInputChange = useCallback(
                (event: React.ChangeEvent<HTMLInputElement>) => {
                    const target = event.target as HTMLInputElement;
                    setInputValue(target.value);
                    const newOptions = filterOptions(getOptionsWithSelected(defaultOptions, selectedOption), target.value);
                    newOptions.length && target.value ? setOptions(newOptions) : updateToDefaultOptions();
                },
                [defaultOptions, selectedOption, updateToDefaultOptions]
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
                        inputRef.current.blur();
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
            }, [areOptionsVisible, selectedOption, updateToDefaultOptions]);

        useEffect(() => {
            const selected = getDefaultSelectedOption(defaultOptions, value);
            setInputValue(selected.label);
            setSelectedOption(selected);
            setOptions(getOptionsWithSelected(defaultOptions, selected));
        }, [defaultOptions, value]);

        useEffect(() => {
            if (downPress && optionsRef.current) {
                selectOption(getNextOption(selectedOption, options));
            }
        }, [downPress]);

        useEffect(() => {
            if (upPress && optionsRef.current) {
                selectOption(getPrevOption(selectedOption, options));
            }
        }, [upPress]);

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
                ref={wrapperRef}
                {...{ variant, disabled, minWidth, fullWidth }}
                isErrorPresent={!!props.errorText}
                onClick={showOptions}
            >
                <TextField
                    variant={variant}
                    fullWidth
                    autoComplete="off"
                    id={selectId}
                    disabled={disabled}
                    value={inputValue}
                    onFocus={showOptions}
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
    placeholder: 'Please Select . . .'
};
