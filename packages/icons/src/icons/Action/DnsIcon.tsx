import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DnsIconSvg from '../../assets/Action/dns_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DnsIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <DnsIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

DnsIcon.Style = SvgIcon;
DnsIcon.displayName = 'DnsIcon';

export default DnsIcon
