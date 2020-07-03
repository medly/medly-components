import { CloseIcon, SearchIcon } from '@medly-components/icons';
import { useCombinedRefs, WithStyle } from '@medly-components/utils';
import React, { FC, useCallback, useRef, useState } from 'react';
import Options from '../SingleSelect/Options';
import { Option } from '../SingleSelect/types';
import { useKeyboardNavigation } from '../SingleSelect/useKeyboardNavigation';
import * as Styled from './SearchBox.styled';
import { Props } from './types';

export const SearchBox: FC<Props> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const { options, searchBoxSize, placeholder, onSearchInputChange, onOptionSelected } = props;
        const inputRef = useCombinedRefs<HTMLInputElement>(ref, React.useRef(null)),
            isFocused = useRef(false),
            optionsRef = useRef<HTMLUListElement>(null),
            [isActive, setActive] = useState(false),
            [isTyping, updateIsTyping] = useState(false),
            [areOptionsVisible, showOptions] = useState(false);

        const selectedOption = options[0];

        const clearSearchText = useCallback(() => {
                inputRef.current.value = null;
                setActive(false);
                showOptions(false);
                updateIsTyping(false);
            }, []),
            handleChange = useCallback(
                (event: React.ChangeEvent<HTMLInputElement>) => {
                    const value = inputRef.current.value; // TODO: should we accept length as a prop?
                    updateIsTyping(true);
                    if (value.length === 0) {
                        updateIsTyping(false);
                    }
                    if (value.length > 2) {
                        setActive(true);
                        showOptions(true);
                        onSearchInputChange(event.target.value);
                    } else {
                        showOptions(false);
                        setActive(false);
                    }
                },
                [inputRef.current]
            ),
            handleFocus = useCallback(() => {
                isFocused.current = true;
            }, []),
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
                    console.log(option);
                },
                [options]
            ),
            showOptionsCB = useCallback(() => {
                showOptions(true);
                // @ts-ignore
                inputRef.current.setSelectionRange(inputRef.length, inputRef.length);
                inputRef.current.focus();
            }, [inputRef]);

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
                    onFocus={handleFocus}
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
