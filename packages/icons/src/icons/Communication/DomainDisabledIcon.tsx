import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DomainDisabledIconSvg from '../../assets/Communication/domain_disabled_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DomainDisabledIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DomainDisabledIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DomainDisabledIcon.Style = SvgIcon;
DomainDisabledIcon.displayName = 'DomainDisabledIcon';

export default DomainDisabledIcon
