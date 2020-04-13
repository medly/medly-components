import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LocalHospitalIconSvg from '../../assets/Maps/local_hospital_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LocalHospitalIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <LocalHospitalIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

LocalHospitalIcon.Style = SvgIcon;
LocalHospitalIcon.displayName = 'LocalHospitalIcon';

export default LocalHospitalIcon
