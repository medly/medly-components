import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ScannerIconSvg from '../../assets/Hardware/scanner_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ScannerIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ScannerIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ScannerIcon.Style = SvgIcon;
ScannerIcon.displayName = 'ScannerIcon';

export default ScannerIcon
