import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import NfcIconSvg from '../../assets/Device/nfc_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const NfcIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <NfcIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

NfcIcon.Style = SvgIcon;
NfcIcon.displayName = 'NfcIcon';

export default NfcIcon
