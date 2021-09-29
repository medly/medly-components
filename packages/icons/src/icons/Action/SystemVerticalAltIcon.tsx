import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SystemVerticalAltIconSvg from '../../assets/Action/system_vertical_alt_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SystemVerticalAltIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'SystemVerticalAltIcon';

const SystemVerticalAltIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon })

export default SystemVerticalAltIcon
