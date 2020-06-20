import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import PinDropIconSvg from '../../assets/Maps/pin_drop_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PinDropIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PinDropIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PinDropIcon.Style = SvgIcon;
PinDropIcon.displayName = 'PinDropIcon';

export default PinDropIcon
