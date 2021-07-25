import { CloseIcon, SearchIcon } from '@medly-components/icons';
import { useCombinedRefs, useKeyPress, useOuterClickNotifier, WithStyle } from '@medly-components/utils';
import ExpandIcon from 'packages/icons/src/icons/Action/ExpandIcon';
import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import Options from '../SingleSelect/Options';
import { Option } from '../SingleSelect/types';
import { useKeyboardNavigation } from '../SingleSelect/useKeyboardNavigation';
import * as Styled from './SearchBox.styled';
import { CloseIconWrapper, ExpandIconWrapper, SearchIconWrapper } from './styles/icons';
import { SearchInput } from './styles/input';
import { Props } from './types';

export const SearchBox: FC<Props> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const {
            options: defaultOptions,
            size,
            placeholder,
            onInputChange,
            onOptionSelected,
            onClear,
            onSearch,
            className,
            showExpandIcon,
            ...restProps
        } = props;
        const wrapperRef = useRef<any>(null),
            inputRef = useCombinedRefs<HTMLInputElement>(ref, React.useRef(null)),
            isFocused = useRef(false),
            enterPress = useKeyPress('Enter'),
            optionsRef = useRef<HTMLUListElement>(null),
            [isTyping, updateIsTyping] = useState(false),
            [areOptionsVisible, setOptionsVisibilityState] = useState(false),
            [options, setOptions] = useState(defaultOptions);

        useEffect(() => {
            setOptions(props.options);
            setOptionsVisibilityState(isTyping && props.options.length > 0);
        }, [props.options, isTyping]);

        const showOptions = useCallback(() => {
                setOptionsVisibilityState(true);
                inputRef.current.focus();
            }, []),
            hideOptions = useCallback(() => {
                setOptionsVisibilityState(false);
                inputRef.current.blur();
                updateIsTyping(false);
            }, []),
            clearSearchText = useCallback(() => {
                inputRef.current.value = '';
                inputRef.current.focus();
                setOptionsVisibilityState(false);
                updateIsTyping(false);
                onClear && onClear();
            }, []),
            handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
                const value = event.target.value;
                updateIsTyping(value.length !== 0);
                onInputChange(value);
            }, []),
            handleOptionClick = useCallback((option: Option) => {
                inputRef.current.value = option.label;
                inputRef.current.focus();
                setOptionsVisibilityState(false);
                onOptionSelected && onOptionSelected(option);
            }, []),
            handleFocus = useCallback((event: React.FocusEvent<HTMLInputElement>) => {
                updateIsTyping(event.target.value.length > 0);
                isFocused.current = true;
            }, []),
            handleBlur = useCallback(() => {
                isFocused.current = false;
            }, []),
            handleSearchIconClick = useCallback(() => onSearch && onSearch(inputRef.current.value), [onSearch]);

        useKeyboardNavigation({
            isFocused,
            options,
            areOptionsVisible,
            setOptions,
            handleOptionClick,
            showOptions,
            optionsRef
        });

        useOuterClickNotifier(() => {
            hideOptions();
        }, wrapperRef);

        useEffect(() => {
            enterPress && isFocused.current && !areOptionsVisible && onSearch && onSearch(inputRef.current.value);
        }, [enterPress, areOptionsVisible]);

        return (
            <Styled.SearchBoxWrapper
                ref={wrapperRef}
                areOptionsVisible={areOptionsVisible}
                size={size}
                className={className}
                showExpandIcon={showExpandIcon}
            >
                <SearchInput
                    placeholder={placeholder}
                    onChange={handleChange}
                    ref={inputRef}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    {...restProps}
                />
                {isTyping && (
                    <CloseIconWrapper isTyping={isTyping} size={size} showExpandIcon={showExpandIcon}>
                        <CloseIcon title="close icon" onClick={clearSearchText} size={size} />
                    </CloseIconWrapper>
                )}
                {showExpandIcon && (
                    <ExpandIconWrapper isTyping={isTyping} size={size}>
                        <ExpandIcon title="expand icon" size={size} />
                    </ExpandIconWrapper>
                )}
                <SearchIconWrapper areOptionsVisible={areOptionsVisible} isTyping={isTyping} size={size}>
                    <SearchIcon title="search icon" size={size} onClick={handleSearchIconClick} />
                </SearchIconWrapper>
                {areOptionsVisible && <Options ref={optionsRef} options={options} variant="filled" onOptionClick={handleOptionClick} />}
            </Styled.SearchBoxWrapper>
        );
    })
);

SearchBox.displayName = 'SearchBox';
SearchBox.Style = Styled.SearchBoxWrapper;
SearchBox.defaultProps = {
    options: [],
    placeholder: 'Search',
    size: 'S'
};
