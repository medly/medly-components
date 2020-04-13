import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LocalPharmacyIconSvg from '../../assets/Maps/local_pharmacy_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LocalPharmacyIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <LocalPharmacyIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

LocalPharmacyIcon.Style = SvgIcon;
LocalPharmacyIcon.displayName = 'LocalPharmacyIcon';

export default LocalPharmacyIcon
