import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ClinicIconSvg from '../../assets/Custom/clinic_24px.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ClinicIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ClinicIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ClinicIcon.Style = SvgIcon;
ClinicIcon.displayName = 'ClinicIcon';

export default ClinicIcon
