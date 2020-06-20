import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import TabUnselectedIconSvg from '../../assets/Action/tab_unselected_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TabUnselectedIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <TabUnselectedIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

TabUnselectedIcon.Style = SvgIcon;
TabUnselectedIcon.displayName = 'TabUnselectedIcon';

export default TabUnselectedIcon
