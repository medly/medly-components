import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import DockIconSvg from '../../assets/Hardware/dock_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DockIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DockIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DockIcon.Style = SvgIcon;
DockIcon.displayName = 'DockIcon';

export default DockIcon
