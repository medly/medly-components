import { CloseIcon, SearchIcon } from '@medly-components/icons';
import { useCombinedRefs, WithStyle } from '@medly-components/utils';
import React, { SFC, useCallback, useEffect, useState } from 'react';
import Options from '../SingleSelect/Options';
import { Option } from '../SingleSelect/types';
import * as Styled from './SearchBox.styled';
import { Props } from './types';

export const SearchBox: SFC<Props> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const { onSearchInputChange, options } = props;
        const inputRef = useCombinedRefs<HTMLInputElement>(ref, React.useRef(null)),
            [showCloseIcon, setCloseIconState] = useState(false),
            [isActive, setActive] = useState(false),
            [isIconActive, setIconActive] = useState(false),
            [areOptionsVisible, setOptionsVisibilityState] = useState(false);

        useEffect(() => {
            options.length > 0 ? setActive(true) : setActive(false);
        });

        const clearSearchText = useCallback(() => {
                inputRef.current.value = null;
                setCloseIconState(false);
                setActive(false);
                setIconActive(false);
                setOptionsVisibilityState(false);
                onSearchInputChange('');
            }, []),
            handleChange = useCallback(
                (event: any) => {
                    const canSearch = inputRef.current.value.length > 0;
                    setCloseIconState(true);
                    setIconActive(true);
                    if (canSearch) {
                        setOptionsVisibilityState(true);
                        onSearchInputChange(event.target.value);
                    } else {
                        setOptionsVisibilityState(false);
                        setCloseIconState(false);
                        setIconActive(false);
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
                        setIconActive(false);
                    }
                },
                [inputRef.current]
            );

        return (
            <Styled.SearchBoxWrapper isActive={isActive} isIconActive={isIconActive} areOptionsVisible={areOptionsVisible}>
                <Styled.SearchBox
                    isActive={isActive}
                    placeholder={props.placeholder}
                    searchBoxSize={'M'}
                    onChange={handleChange}
                    ref={inputRef}
                />
                <Options options={options} variant="filled" onOptionClick={handleOptionClick}></Options>
                <Styled.CloseIconWrapper isIconActive={isIconActive}>
                    {showCloseIcon && <CloseIcon onClick={clearSearchText} />}
                </Styled.CloseIconWrapper>
                <Styled.SearchIconWrapper isIconActive={isIconActive}>
                    <SearchIcon />
                </Styled.SearchIconWrapper>
            </Styled.SearchBoxWrapper>
        );
    })
);

SearchBox.displayName = 'SearchBox';
SearchBox.Style = Styled.SearchBox;
SearchBox.defaultProps = {
    options: []
};
