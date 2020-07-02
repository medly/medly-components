import { CloseIcon, SearchIcon } from '@medly-components/icons';
import { useCombinedRefs, WithStyle } from '@medly-components/utils';
import React, { SFC, useCallback, useState } from 'react';
import Options from '../SingleSelect/Options';
import { Option } from '../SingleSelect/types';
import * as Styled from './SearchBox.styled';
import { Props } from './types';

export const SearchBox: SFC<Props> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const { options, searchBoxSize, placeholder, onSearchInputChange } = props;
        const inputRef = useCombinedRefs<HTMLInputElement>(ref, React.useRef(null)),
            [isActive, setActive] = useState(false);

        const clearSearchText = useCallback(() => {
                inputRef.current.value = null;
                setActive(false);
                onSearchInputChange('');
            }, []),
            handleChange = useCallback(
                (event: any) => {
                    const canSearch = inputRef.current.value.length > 2; // TODO: should we accept length as a prop?
                    if (canSearch) {
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
                <Styled.CloseIconWrapper isActive={isActive} searchBoxSize={searchBoxSize}>
                    {isActive && <CloseIcon onClick={clearSearchText} />}
                </Styled.CloseIconWrapper>
                <Styled.SearchIconWrapper isActive={isActive}>
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
