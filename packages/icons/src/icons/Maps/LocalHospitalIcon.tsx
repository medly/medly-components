import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import LocalHospitalIconSvg from '../../assets/Maps/local_hospital_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LocalHospitalIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LocalHospitalIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LocalHospitalIcon.Style = SvgIcon;
LocalHospitalIcon.displayName = 'LocalHospitalIcon';

export default LocalHospitalIcon
