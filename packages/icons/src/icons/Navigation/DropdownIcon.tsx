import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DropdownIconSvg from '../../assets/Navigation/dropdown_24px.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DropdownIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DropdownIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DropdownIcon.Style = SvgIcon;
DropdownIcon.displayName = 'DropdownIcon';

export default DropdownIcon
