import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import DnsIconSvg from '../../assets/Action/dns_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DnsIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DnsIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DnsIcon.Style = SvgIcon;
DnsIcon.displayName = 'DnsIcon';

export default DnsIcon
