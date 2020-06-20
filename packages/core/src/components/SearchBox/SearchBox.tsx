import { CloseIcon, SearchIcon } from '@medly-components/icons';
import { useCombinedRefs, WithStyle } from '@medly-components/utils';
import React, { SFC, useCallback, useEffect, useState } from 'react';
import Options from '../SingleSelect/Options';
import { Option } from '../SingleSelect/types';
import * as Styled from './SearchBox.styled';
import { Props } from './types';

export const SearchBox: SFC<Props> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const { getOptions, searchOptions } = props;
        const inputRef = useCombinedRefs<HTMLInputElement>(ref, React.useRef(null)),
            [showCloseIcon, setCloseIconState] = useState(false),
            [options, setOptions] = useState(searchOptions),
            [isActive, setActive] = useState(false),
            [isIconActive, setIconActive] = useState(false);

        useEffect(() => {
            setOptions(searchOptions);
            searchOptions.length > 0 ? setActive(true) : setActive(false);
        });

        const handleChange = useCallback(() => {
                const canSearch = inputRef.current.value.length >= 3;
                setCloseIconState(true);
                setIconActive(true);
                if (canSearch) {
                    getOptions();
                }
            }, [inputRef.current]),
            clearSearchText = useCallback(() => {
                inputRef.current.value = null;
                setCloseIconState(false);
                setActive(false);
                setIconActive(false);
                setOptions([]);
            }, []),
            handleOptionClick = useCallback(
                (option: Option) => {
                    if (!option.disabled && !Array.isArray(option.value)) {
                        inputRef.current.value = option.label;
                        setActive(false);
                        setIconActive(false);
                        setOptions([]);
                    }
                },
                [inputRef.current]
            );

        return (
            <Styled.SearchBoxWrapper {...props} isActive={isActive}>
                <Styled.SearchBox isActive={isActive} placeholder={props.placeholder} boxSize={'M'} onInput={handleChange} ref={inputRef} />
                <Options options={options} onOptionClick={handleOptionClick}></Options>
                <Styled.CloseIconWrapper>{showCloseIcon && <CloseIcon onClick={clearSearchText} />}</Styled.CloseIconWrapper>
                <Styled.SearchIconWrapper isIconActive={isIconActive}><SearchIcon /></Styled.SearchIconWrapper>
            </Styled.SearchBoxWrapper>
        );
    })
);

SearchBox.displayName = 'SearchBox';
SearchBox.Style = Styled.SearchBox;
SearchBox.defaultProps = {
    searchOptions: []
};
