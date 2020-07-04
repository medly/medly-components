import { CloseIcon, SearchIcon } from '@medly-components/icons';
import { useCombinedRefs, WithStyle } from '@medly-components/utils';
import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { getOptionsWithSelected } from '../SingleSelect/helpers';
import Options from '../SingleSelect/Options';
import { Option } from '../SingleSelect/types';
import { useKeyboardNavigation } from '../SingleSelect/useKeyboardNavigation';
import * as Styled from './SearchBox.styled';
import { Props } from './types';

export const SearchBox: FC<Props> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const { options: defaultOptions, searchBoxSize, placeholder, onSearchInputChange, onOptionSelected } = props;
        const inputRef = useCombinedRefs<HTMLInputElement>(ref, React.useRef(null)),
            isFocused = useRef(false),
            optionsRef = useRef<HTMLUListElement>(null),
            [isActive, setActive] = useState(false),
            [isTyping, updateIsTyping] = useState(false),
            [areOptionsVisible, showOptions] = useState(false),
            [options, setOptions] = useState(defaultOptions),
            [selectedOption, setSelectedOption] = useState(options[0]);

        useEffect(() => {
            setOptions(props.options);
            if (props.options.length > 0) {
                setActive(true);
                showOptions(true);
                isFocused.current = true;
            } else {
                showOptions(false);
                setActive(false);
            }
        }, [props.options]);

        const clearSearchText = useCallback(() => {
                inputRef.current.value = '';
                inputRef.current.focus();
                setActive(false);
                showOptions(false);
                updateIsTyping(false);
            }, []),
            handleChange = useCallback(
                (event: React.ChangeEvent<HTMLInputElement>) => {
                    const value = inputRef.current.value;
                    updateIsTyping(true);
                    onSearchInputChange(event.target.value);
                    if (value.length === 0) {
                        updateIsTyping(false);
                        isFocused.current = false;
                    }
                },
                [inputRef.current, options]
            ),
            handleOptionClick = useCallback(
                (option: Option) => {
                    if (!option.disabled && !Array.isArray(option.value)) {
                        inputRef.current.value = option.label;
                        setActive(false);
                        showOptions(false);
                        // onOptionSelected(option);
                    } else {
                        inputRef.current.focus();
                    }
                },
                [inputRef.current]
            ),
            selectOption = useCallback(
                (option: Option) => {
                    setOptions(getOptionsWithSelected(options, option));
                    setSelectedOption(option);
                },
                [options]
            ),
            showOptionsCB = useCallback(() => {
                showOptions(true);
                // @ts-ignore
                inputRef.current.setSelectionRange(inputRef.length, inputRef.length);
                inputRef.current.focus();
            }, [inputRef]),
            handleKeyUp = () => {
                if (inputRef.current.value.length === 0) {
                    isFocused.current = false;
                }
            },
            handleKeyDown = () => {
                if (inputRef.current.value.length === 0) {
                    isFocused.current = false;
                }
            };

        useKeyboardNavigation({
            isFocused,
            selectedOption,
            options,
            areOptionsVisible,
            selectOption,
            handleOptionClick,
            showOptions: showOptionsCB,
            optionsRef
        });

        return (
            <Styled.SearchBoxWrapper isActive={isActive} searchBoxSize={searchBoxSize}>
                <Styled.SearchBox
                    isActive={isActive}
                    placeholder={placeholder}
                    searchBoxSize={searchBoxSize}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    onKeyUp={handleKeyUp}
                    ref={inputRef}
                />
                {areOptionsVisible && (
                    <Options ref={optionsRef} options={options} variant="filled" onOptionClick={handleOptionClick}></Options>
                )}
                <Styled.CloseIconWrapper isTyping={isTyping} searchBoxSize={searchBoxSize}>
                    {isTyping && <CloseIcon onClick={clearSearchText} />}
                </Styled.CloseIconWrapper>
                <Styled.SearchIconWrapper isActive={isActive} isTyping={isTyping} searchBoxSize={searchBoxSize}>
                    <SearchIcon data-testid="search-icon" />
                </Styled.SearchIconWrapper>
            </Styled.SearchBoxWrapper>
        );
    })
);

SearchBox.displayName = 'SearchBox';
SearchBox.Style = Styled.SearchBox;
SearchBox.defaultProps = {
    options: [],
    placeholder: 'Search',
    searchBoxSize: 'S'
};
