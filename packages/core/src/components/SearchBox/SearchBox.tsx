import { CloseIcon, SearchIcon } from '@medly-components/icons';
import { useCombinedRefs, WithStyle } from '@medly-components/utils';
import React, { FC, useCallback, useState } from 'react';
import Options from '../SingleSelect/Options';
import { Option } from '../SingleSelect/types';
import * as Styled from './SearchBox.styled';
import { Props } from './types';

export const SearchBox: FC<Props> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const { options, searchBoxSize, placeholder, onSearchInputChange } = props;
        const inputRef = useCombinedRefs<HTMLInputElement>(ref, React.useRef(null)),
            [isActive, setActive] = useState(false),
            [isTyping, updateIsTyping] = useState(false);

        const clearSearchText = useCallback(() => {
                inputRef.current.value = null;
                setActive(false);
                onSearchInputChange('');
                updateIsTyping(false);
            }, []),
            handleChange = useCallback(
                (event: React.FormEvent<HTMLInputElement>) => {
                    const value = inputRef.current.value; // TODO: should we accept length as a prop?
                    updateIsTyping(true);
                    if (value.length === 0) {
                        updateIsTyping(false);
                    }
                    if (value.length > 2) {
                        setActive(true);
                        onSearchInputChange(event.target.value);
                    } else {
                        setActive(false);
                        onSearchInputChange('');
                    }
                },
                [inputRef.current]
            ),
            handleOptionClick = useCallback(
                (option: Option) => {
                    if (!option.disabled && !Array.isArray(option.value)) {
                        inputRef.current.value = option.label;
                        setActive(false);
                    }
                },
                [inputRef.current]
            );

        return (
            <Styled.SearchBoxWrapper isActive={isActive} searchBoxSize={searchBoxSize}>
                <Styled.SearchBox
                    isActive={isActive}
                    placeholder={placeholder}
                    searchBoxSize={searchBoxSize}
                    onChange={handleChange}
                    ref={inputRef}
                />
                <Options options={options} variant="filled" onOptionClick={handleOptionClick}></Options>
                <Styled.CloseIconWrapper isTyping={isTyping} searchBoxSize={searchBoxSize}>
                    {isTyping && <CloseIcon onClick={clearSearchText} />}
                </Styled.CloseIconWrapper>
                <Styled.SearchIconWrapper isActive={isActive} isTyping={isTyping} searchBoxSize={searchBoxSize}>
                    <SearchIcon />
                </Styled.SearchIconWrapper>
            </Styled.SearchBoxWrapper>
        );
    })
);

SearchBox.displayName = 'SearchBox';
SearchBox.Style = Styled.SearchBox;
SearchBox.defaultProps = {
    options: [],
    placeholder: 'Search'
};
