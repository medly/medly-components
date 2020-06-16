import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import CellWifiIconSvg from '../../assets/Communication/cell_wifi_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CellWifiIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CellWifiIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CellWifiIcon.Style = SvgIcon;
CellWifiIcon.displayName = 'CellWifiIcon';

export default CellWifiIcon
