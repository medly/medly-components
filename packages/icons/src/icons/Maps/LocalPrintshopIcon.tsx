import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LocalPrintshopIconSvg from '../../assets/Maps/local_printshop_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LocalPrintshopIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <LocalPrintshopIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

LocalPrintshopIcon.Style = SvgIcon;
LocalPrintshopIcon.displayName = 'LocalPrintshopIcon';

export default LocalPrintshopIcon
