import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SortIconSvg from '../../assets/Content/sort_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SortIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SortIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SortIcon.Style = SvgIcon;
SortIcon.displayName = 'SortIcon';

export default SortIcon
