import { CloseIcon, ExpandIcon, SearchIcon } from '@medly-components/icons';
import { useCombinedRefs, useKeyPress, useOuterClickNotifier, WithStyle } from '@medly-components/utils';
import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import Options from '../SingleSelect/Options';
import { Option } from '../SingleSelect/types';
import { useKeyboardNavigation } from '../SingleSelect/useKeyboardNavigation';
import * as Styled from './SearchBox.styled';
import { CustomSearchFilterWrapper } from './styles/customSearch';
import { CloseIconWrapper, ExpandIconWrapper, SearchIconWrapper } from './styles/icons';
import { SearchInput } from './styles/input';
import { SearchBoxProps } from './types';

const Component: FC<SearchBoxProps> = React.memo(
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
            customSearchFilter,
            fullWidth,
            minWidth,
            ...restProps
        } = props;
        const wrapperRef = useRef<any>(null),
            inputRef = useCombinedRefs<HTMLInputElement>(ref, React.useRef(null)),
            isFocused = useRef(false),
            enterPress = useKeyPress('Enter'),
            optionsRef = useRef<HTMLUListElement>(null),
            [isTyping, updateIsTyping] = useState(false),
            [areOptionsVisible, setOptionsVisibilityState] = useState(false),
            [options, setOptions] = useState(defaultOptions),
            [isCustomSearchActive, setIsCustomSearchActive] = useState(false),
            [showCloseIcon, setShowCloseIcon] = useState(false);

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
            showCustomSearch = useCallback(() => setIsCustomSearchActive(true), []),
            hideCustomSearch = useCallback(() => setIsCustomSearchActive(false), []),
            clearSearchText = useCallback(() => {
                inputRef.current.value = '';
                inputRef.current.focus();
                setOptionsVisibilityState(false);
                setShowCloseIcon(false);
                updateIsTyping(false);
                onClear && onClear();
            }, []),
            handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
                const value = event.target.value;
                updateIsTyping(value.length !== 0);
                setShowCloseIcon(value.length !== 0);
                onInputChange(value);
            }, []),
            handleOptionClick = useCallback(
                (option: Option) => {
                    inputRef.current.value = option.label;
                    inputRef.current.focus();
                    setOptionsVisibilityState(false);
                    onOptionSelected && onOptionSelected(option);
                },
                [onOptionSelected]
            ),
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

        const hasCustomSearchFilter = !!customSearchFilter;

        return (
            <Styled.SearchBoxWrapper
                ref={wrapperRef}
                areOptionsVisible={areOptionsVisible}
                size={size}
                className={className}
                hasCustomSearchFilter={hasCustomSearchFilter}
                minWidth={minWidth}
                fullWidth={fullWidth}
            >
                <SearchInput
                    placeholder={placeholder}
                    onChange={handleChange}
                    ref={inputRef}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    {...restProps}
                />
                {showCloseIcon && (
                    <CloseIconWrapper showCloseIcon={showCloseIcon} size={size} hasCustomSearchFilter={hasCustomSearchFilter}>
                        <CloseIcon title="close icon" onClick={clearSearchText} size={size} />
                    </CloseIconWrapper>
                )}
                {hasCustomSearchFilter && (
                    <ExpandIconWrapper size={size} isCustomSearchActive={isCustomSearchActive}>
                        <ExpandIcon title="expand icon" size={size} onClick={isCustomSearchActive ? hideCustomSearch : showCustomSearch} />
                    </ExpandIconWrapper>
                )}
                <SearchIconWrapper areOptionsVisible={areOptionsVisible} isTyping={isTyping} size={size}>
                    <SearchIcon title="search icon" size={size} onClick={handleSearchIconClick} />
                </SearchIconWrapper>
                {areOptionsVisible && (
                    <Options size="M" ref={optionsRef} options={options} variant="filled" onOptionClick={handleOptionClick} />
                )}
                {isCustomSearchActive && <CustomSearchFilterWrapper size={size}>{customSearchFilter}</CustomSearchFilterWrapper>}
            </Styled.SearchBoxWrapper>
        );
    })
);

Component.displayName = 'SearchBox';
Component.defaultProps = {
    options: [],
    placeholder: 'Search',
    size: 'S',
    minWidth: '25.6rem',
    fullWidth: false
};
export const SearchBox: FC<SearchBoxProps> & WithStyle = Object.assign(Component, { Style: Styled.SearchBoxWrapper });
