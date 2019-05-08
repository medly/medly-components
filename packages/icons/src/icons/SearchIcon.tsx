// tslint:disable:max-line-length
import { WithStyle } from '@medly-components/utils';
import React from 'react';
import SearchSvg from '../assets/Search.svg';
import SvgIcon, { Props } from '../SvgIcon';

const SearchIcon: React.FunctionComponent<Props> & WithStyle = ({ size, color, ...props }) => (
    <SvgIcon size={size} color={color} {...props}>
        <SearchSvg width="1em" height="1em" />
    </SvgIcon>
);

SearchIcon.Style = SvgIcon;
SearchIcon.displayName = 'SearchIcon';
export default SearchIcon;
