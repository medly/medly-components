import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import PauseCircleOutlineIconSvg from '../../assets/Media/pause_circle_outline_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PauseCircleOutlineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PauseCircleOutlineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PauseCircleOutlineIcon.Style = SvgIcon;
PauseCircleOutlineIcon.displayName = 'PauseCircleOutlineIcon';

export default PauseCircleOutlineIcon
