import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ReplayIconSvg from '../../assets/Media/replay_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ReplayIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ReplayIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ReplayIcon.Style = SvgIcon;
ReplayIcon.displayName = 'ReplayIcon';

export default ReplayIcon
