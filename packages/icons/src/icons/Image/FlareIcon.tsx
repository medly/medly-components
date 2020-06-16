import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import FlareIconSvg from '../../assets/Image/flare_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FlareIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FlareIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FlareIcon.Style = SvgIcon;
FlareIcon.displayName = 'FlareIcon';

export default FlareIcon
