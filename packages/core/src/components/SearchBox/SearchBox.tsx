import { SearchIcon } from '@medly-components/icons';
import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import * as Styled from './SearchBox.styled';
import { Props } from './types';

export const SearchBox: SFC<Props> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        return (
            <Styled.SearchBoxWrapper {...props} ref={ref}>
                <Styled.SearchBox placeholder={props.placeholder} boxSize={'M'} />
                <SearchIcon />
            </Styled.SearchBoxWrapper>
        );
    })
);

SearchBox.displayName = 'SearchBox';
SearchBox.Style = Styled.SearchBox;
