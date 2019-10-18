// tslint:disable:max-line-length
import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SearchSvg from '../assets/Search.svg';
import SvgIcon, { Props } from '../SvgIcon';

export const SearchIcon: SFC<Props> & WithStyle = props => (
    <SvgIcon {...props}>
        <SearchSvg {...props} width="1em" height="1em" />
    </SvgIcon>
);

SearchIcon.Style = SvgIcon;
SearchIcon.displayName = 'SearchIcon';
