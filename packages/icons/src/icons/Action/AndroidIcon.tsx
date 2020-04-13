import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AndroidIconSvg from '../../assets/Action/android_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AndroidIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AndroidIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

AndroidIcon.Style = SvgIcon;
AndroidIcon.displayName = 'AndroidIcon';

export default AndroidIcon
