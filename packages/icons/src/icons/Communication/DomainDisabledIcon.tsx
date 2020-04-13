import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DomainDisabledIconSvg from '../../assets/Communication/domain_disabled_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DomainDisabledIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <DomainDisabledIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

DomainDisabledIcon.Style = SvgIcon;
DomainDisabledIcon.displayName = 'DomainDisabledIcon';

export default DomainDisabledIcon
