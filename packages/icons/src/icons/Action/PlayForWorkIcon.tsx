import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import PlayForWorkIconSvg from '../../assets/Action/play_for_work_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PlayForWorkIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PlayForWorkIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PlayForWorkIcon.Style = SvgIcon;
PlayForWorkIcon.displayName = 'PlayForWorkIcon';

export default PlayForWorkIcon
