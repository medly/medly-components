import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SearchIconSvg from '../../assets/Forms/Search.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SearchIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SearchIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SearchIcon.Style = SvgIcon;
SearchIcon.displayName = 'SearchIcon';

export default SearchIcon
