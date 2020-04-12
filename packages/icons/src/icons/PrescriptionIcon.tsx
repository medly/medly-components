import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PrescriptionIconSvg from '../assets/Prescription.svg';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const PrescriptionIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PrescriptionIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PrescriptionIcon.Style = SvgIcon;
PrescriptionIcon.displayName = 'PrescriptionIcon';

export default PrescriptionIcon
