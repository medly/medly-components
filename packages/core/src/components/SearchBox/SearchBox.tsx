import { CloseIcon, ExpandIcon, SearchIcon } from '@medly-components/icons';
import { CircleLoader } from '@medly-components/loaders';
import { WithStyle, useCombinedRefs, useKeyPress, useOuterClickNotifier } from '@medly-components/utils';
import type { FC } from 'react';
import { forwardRef, memo, useCallback, useEffect, useRef, useState } from 'react';
import Options from '../SingleSelect/Options';
import { Option } from '../SingleSelect/types';
import { useKeyboardNavigation } from '../SingleSelect/useKeyboardNavigation';
import * as Styled from './SearchBox.styled';
import { CustomSearchFilterWrapper } from './styles/customSearch';
import { CloseIconWrapper, ExpandIconWrapper, SearchIconWrapper } from './styles/icons';
import { SearchInput } from './styles/input';
import { SearchBoxProps } from './types';

const Component: FC<SearchBoxProps> = memo(
    forwardRef((props, ref) => {
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
            maxWidth,
            isLoading,
            loader: customLoader,
            value,
            ...restProps
        } = props;
        const wrapperRef = useRef<any>(null),
            inputRef = useCombinedRefs<HTMLInputElement>(ref, useRef(null)),
            isFocused = useRef(false),
            optionsRef = useRef<HTMLUListElement>(null),
            [isTyping, updateIsTyping] = useState(false),
            [areOptionsVisible, setOptionsVisibilityState] = useState(false),
            [options, setOptions] = useState<Option[]>(defaultOptions || []),
            [isCustomSearchActive, setIsCustomSearchActive] = useState(false),
            [showCloseIcon, setShowCloseIcon] = useState(!!value?.toString().length),
            isEnterKeyPress = useKeyPress('Enter', true, optionsRef);

        useEffect(() => {
            if (props.options) {
                setOptions(props.options);
                setOptionsVisibilityState(isTyping && props.options.length > 0);
            }
        }, [props.options, isTyping]);

        const showOptions = useCallback(() => {
                setOptionsVisibilityState(true);
                inputRef.current?.focus();
            }, []),
            hideOptions = useCallback(() => {
                setOptionsVisibilityState(false);
                inputRef.current?.blur();
                updateIsTyping(false);
            }, []),
            showCustomSearch = useCallback(() => setIsCustomSearchActive(true), []),
            hideCustomSearch = useCallback(() => setIsCustomSearchActive(false), []),
            clearSearchText = useCallback(() => {
                if (inputRef.current) {
                    inputRef.current.value = '';
                    inputRef.current.focus();
                }
                setOptionsVisibilityState(false);
                setShowCloseIcon(false);
                updateIsTyping(false);
                onClear?.();
            }, []),
            handleChange = useCallback(
                (event: React.ChangeEvent<HTMLInputElement>) => {
                    const { value } = event.target;
                    updateIsTyping(value.length !== 0);
                    setShowCloseIcon(value.length !== 0);
                    onInputChange?.(value);
                },
                [onInputChange]
            ),
            handleOptionClick = useCallback(
                (option: Option) => {
                    if (inputRef.current) {
                        inputRef.current.value = option.label;
                        inputRef.current.focus();
                    }
                    setOptionsVisibilityState(false);
                    onOptionSelected?.(option);
                },
                [onOptionSelected]
            ),
            handleFocus = useCallback(
                (event: React.FocusEvent<HTMLInputElement>) => {
                    updateIsTyping(event.target.value.length > 0);
                    isFocused.current = true;
                    options.length > 0 && setOptionsVisibilityState(true);
                },
                [options]
            ),
            handleBlur = useCallback(() => {
                isFocused.current = false;
            }, []),
            handleSearchIconClick = useCallback(() => onSearch?.(inputRef.current?.value || ''), [onSearch]);

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
            if (isEnterKeyPress && isFocused.current) {
                const currentSelectedOption = options.find(option => option.hovered === true);
                if (inputRef.current && currentSelectedOption) {
                    inputRef.current.value = currentSelectedOption.label;
                    onOptionSelected?.(currentSelectedOption);
                    inputRef.current.blur();
                }
                !currentSelectedOption && onSearch?.(inputRef.current?.value || '');
                setOptionsVisibilityState(false);
                setShowCloseIcon(inputRef.current?.value.length !== 0);
                updateIsTyping(false);
            }
        }, [isEnterKeyPress]);

        useEffect(() => {
            setShowCloseIcon(!!value?.toString().length);
        }, [value]);

        const hasCustomSearchFilter = !!customSearchFilter;

        return (
            <Styled.SearchBoxWrapper
                ref={wrapperRef}
                areOptionsVisible={areOptionsVisible}
                size={size!}
                className={className}
                hasCustomSearchFilter={hasCustomSearchFilter}
                minWidth={minWidth}
                fullWidth={fullWidth}
                maxWidth={maxWidth}
            >
                <SearchInput
                    placeholder={placeholder}
                    onChange={handleChange}
                    ref={inputRef}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    value={value}
                    {...restProps}
                />
                {showCloseIcon && (
                    <CloseIconWrapper showCloseIcon={showCloseIcon} size={size!} hasCustomSearchFilter={hasCustomSearchFilter}>
                        <CloseIcon title="close icon" onClick={clearSearchText} size={size} />
                    </CloseIconWrapper>
                )}
                {hasCustomSearchFilter && (
                    <ExpandIconWrapper size={size!} isCustomSearchActive={isCustomSearchActive}>
                        <ExpandIcon title="expand icon" size={size} onClick={isCustomSearchActive ? hideCustomSearch : showCustomSearch} />
                    </ExpandIconWrapper>
                )}
                <SearchIconWrapper areOptionsVisible={areOptionsVisible} isTyping={isTyping} size={size!}>
                    {isLoading ? (
                        customLoader ? (
                            customLoader
                        ) : (
                            <CircleLoader data-testid="circle-loader" size="XXS" />
                        )
                    ) : (
                        <SearchIcon title="search icon" size={size} onClick={handleSearchIconClick} />
                    )}
                </SearchIconWrapper>
                {areOptionsVisible && options && (
                    <Options
                        size={size!}
                        ref={optionsRef}
                        options={options}
                        variant="filled"
                        onOptionClick={handleOptionClick}
                        maxWidth={maxWidth}
                    />
                )}
                {isCustomSearchActive && <CustomSearchFilterWrapper size={size!}>{customSearchFilter}</CustomSearchFilterWrapper>}
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
    maxWidth: '100%',
    fullWidth: false
};
export const SearchBox: FC<SearchBoxProps> & WithStyle = Object.assign(Component, { Style: Styled.SearchBoxWrapper });
