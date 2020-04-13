import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FingerprintIconSvg from '../../assets/Action/fingerprint_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FingerprintIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FingerprintIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FingerprintIcon.Style = SvgIcon;
FingerprintIcon.displayName = 'FingerprintIcon';

export default FingerprintIcon
