import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LandscapeIconSvg from '../../assets/Image/landscape_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LandscapeIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LandscapeIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LandscapeIcon.Style = SvgIcon;
LandscapeIcon.displayName = 'LandscapeIcon';

export default LandscapeIcon
