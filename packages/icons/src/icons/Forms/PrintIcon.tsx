import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PrintIconSvg from '../../assets/Forms/Print.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PrintIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PrintIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PrintIcon.Style = SvgIcon;
PrintIcon.displayName = 'PrintIcon';

export default PrintIcon
