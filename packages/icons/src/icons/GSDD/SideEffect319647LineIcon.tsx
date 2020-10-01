import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect319647LineIconSvg from '../../assets/GSDD/SideEffect_3196_47_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect319647LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect319647LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect319647LineIcon.Style = SvgIcon;
SideEffect319647LineIcon.displayName = 'SideEffect319647LineIcon';

export default SideEffect319647LineIcon
