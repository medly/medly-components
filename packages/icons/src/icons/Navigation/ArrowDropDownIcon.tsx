import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ArrowDropDownIconSvg from '../../assets/Navigation/arrow_drop_down_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ArrowDropDownIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ArrowDropDownIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ArrowDropDownIcon.Style = SvgIcon;
ArrowDropDownIcon.displayName = 'ArrowDropDownIcon';

export default ArrowDropDownIcon
