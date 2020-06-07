import { CloseIcon, SearchIcon } from '@medly-components/icons';
import { useCombinedRefs, WithStyle } from '@medly-components/utils';
import React, { SFC, useState } from 'react';
import * as Styled from './SearchBox.styled';
import { Props } from './types';

export const SearchBox: SFC<Props> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const inputRef = useCombinedRefs<HTMLInputElement>(ref, React.useRef(null)),
            [showCloseIcon, setCloseIconState] = useState(false);

        const handleFocus = () => setCloseIconState(true);

        const clearSearchText = () => {
            inputRef.current.value = null;
        };

        return (
            <Styled.SearchBoxWrapper {...props}>
                <Styled.SearchBox placeholder={props.placeholder} boxSize={'M'} onKeyPress={handleFocus} ref={inputRef} />
                <Styled.CloseIconWrapper>{showCloseIcon && <CloseIcon onClick={clearSearchText} />}</Styled.CloseIconWrapper>
                <SearchIcon />
            </Styled.SearchBoxWrapper>
        );
    })
);

SearchBox.displayName = 'SearchBox';
SearchBox.Style = Styled.SearchBox;
