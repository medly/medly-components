import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SearchIconSvg from '../../assets/Action/search_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SearchIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SearchIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SearchIcon.Style = SvgIcon;
SearchIcon.displayName = 'SearchIcon';

export default SearchIcon
