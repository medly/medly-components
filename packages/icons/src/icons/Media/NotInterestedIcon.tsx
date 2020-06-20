import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import NotInterestedIconSvg from '../../assets/Media/not_interested_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const NotInterestedIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <NotInterestedIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

NotInterestedIcon.Style = SvgIcon;
NotInterestedIcon.displayName = 'NotInterestedIcon';

export default NotInterestedIcon
