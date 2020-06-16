import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import HearingIconSvg from '../../assets/Media/hearing_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const HearingIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <HearingIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

HearingIcon.Style = SvgIcon;
HearingIcon.displayName = 'HearingIcon';

export default HearingIcon
