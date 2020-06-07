import React, { SFC } from 'react';
import * as Styled from './SearchBox.styled';
import { Props } from './types';

export const SearchBox: SFC<Props> = React.memo(
    React.forwardRef((props, ref) => {
        const { placeholder } = props;
        return <Styled.SearchBox ref={ref} placeholder={placeholder} />;
    })
);  

SearchBox.displayName = 'SearchBox';
