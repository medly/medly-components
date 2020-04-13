import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ExpandLessIconSvg from '../../assets/Navigation/expand_less_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ExpandLessIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ExpandLessIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ExpandLessIcon.Style = SvgIcon;
ExpandLessIcon.displayName = 'ExpandLessIcon';

export default ExpandLessIcon
