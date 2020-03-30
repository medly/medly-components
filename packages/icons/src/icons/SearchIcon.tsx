import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SearchSvg from '../assets/Search.svg';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

export const SearchIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SearchSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SearchIcon.Style = SvgIcon;
SearchIcon.displayName = 'SearchIcon';
