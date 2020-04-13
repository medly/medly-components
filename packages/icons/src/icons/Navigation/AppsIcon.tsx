import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AppsIconSvg from '../../assets/Navigation/apps_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AppsIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AppsIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

AppsIcon.Style = SvgIcon;
AppsIcon.displayName = 'AppsIcon';

export default AppsIcon
