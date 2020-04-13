import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PrintDisabledIconSvg from '../../assets/Communication/print_disabled_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PrintDisabledIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PrintDisabledIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PrintDisabledIcon.Style = SvgIcon;
PrintDisabledIcon.displayName = 'PrintDisabledIcon';

export default PrintDisabledIcon
