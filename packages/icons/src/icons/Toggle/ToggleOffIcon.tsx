import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ToggleOffIconSvg from '../../assets/Toggle/toggle_off_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ToggleOffIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ToggleOffIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ToggleOffIcon.Style = SvgIcon;
ToggleOffIcon.displayName = 'ToggleOffIcon';

export default ToggleOffIcon
