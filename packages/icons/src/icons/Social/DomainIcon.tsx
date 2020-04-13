import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DomainIconSvg from '../../assets/Social/domain_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DomainIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DomainIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DomainIcon.Style = SvgIcon;
DomainIcon.displayName = 'DomainIcon';

export default DomainIcon
