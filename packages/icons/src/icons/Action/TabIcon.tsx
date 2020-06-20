import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import TabIconSvg from '../../assets/Action/tab_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TabIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <TabIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

TabIcon.Style = SvgIcon;
TabIcon.displayName = 'TabIcon';

export default TabIcon
