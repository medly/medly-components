import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import HdIconSvg from '../../assets/Media/hd_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const HdIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <HdIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

HdIcon.Style = SvgIcon;
HdIcon.displayName = 'HdIcon';

export default HdIcon
