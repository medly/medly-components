import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import AcUnitIconSvg from '../../assets/Places/ac_unit_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AcUnitIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AcUnitIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

AcUnitIcon.Style = SvgIcon;
AcUnitIcon.displayName = 'AcUnitIcon';

export default AcUnitIcon
