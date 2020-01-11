import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PrintSvg from '../assets/Print.svg';
import SvgIcon, { Props } from '../SvgIcon';

export const PrintIcon: SFC<Props> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PrintSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PrintIcon.Style = SvgIcon;
PrintIcon.displayName = 'PrintIcon';
