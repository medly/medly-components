import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import VisibilityOffIconSvg from '../../assets/Action/visibility_off_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const VisibilityOffIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <VisibilityOffIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

VisibilityOffIcon.Style = SvgIcon;
VisibilityOffIcon.displayName = 'VisibilityOffIcon';

export default VisibilityOffIcon
