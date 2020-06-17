import { CloseIcon, SearchIcon } from '@medly-components/icons';
import { useCombinedRefs, WithStyle } from '@medly-components/utils';
import React, { SFC, useCallback, useState } from 'react';
import Options from '../SingleSelect/Options';
import { Option } from '../SingleSelect/types';
import * as Styled from './SearchBox.styled';
import { Props } from './types';

export const SearchBox: SFC<Props> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const { getOptions } = props;
        const inputRef = useCombinedRefs<HTMLInputElement>(ref, React.useRef(null)),
            [showCloseIcon, setCloseIconState] = useState(false),
            [options, setOptions] = useState([]),
            [active, setActive] = useState(false),
            [activeSearchIcon, setSearchIconActive] = useState(false);

        const handleFocus = () => {
                const canSearch = inputRef.current.value.length >= 3;
                setCloseIconState(true);
                setSearchIconActive(true);
                setActive(canSearch);
                setOptions(canSearch ? getOptions(inputRef.current.value) : []);
            },
            clearSearchText = () => {
                inputRef.current.value = null;
                setCloseIconState(false);
                setActive(false);
                setSearchIconActive(false);
                setOptions([]);
            },
            handleOptionClick = useCallback(
                (option: Option) => {
                    if (!option.disabled && !Array.isArray(option.value)) {
                        inputRef.current.value = option.label;
                        setActive(false);
                        setSearchIconActive(false);
                        setOptions([]);
                    }
                },
                [inputRef.current]
            );

        return (
            <Styled.SearchBoxWrapper {...props}>
                <Styled.SearchBox
                    placeholder={props.placeholder}
                    boxSize={'M'}
                    onInput={handleFocus}
                    ref={inputRef}
                    className={active ? 'active' : ''}
                />
                <hr className={active ? 'active' : ''} />
                <Options options={options} onOptionClick={handleOptionClick} className={active ? 'active' : ''}></Options>
                <Styled.CloseIconWrapper>{showCloseIcon && <CloseIcon onClick={clearSearchText} />}</Styled.CloseIconWrapper>
                <SearchIcon className={activeSearchIcon ? 'active' : ''} />
            </Styled.SearchBoxWrapper>
        );
    })
);

SearchBox.displayName = 'SearchBox';
SearchBox.Style = Styled.SearchBox;
