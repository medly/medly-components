import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import VisibilityIconSvg from '../../assets/Action/visibility_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const VisibilityIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <VisibilityIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

VisibilityIcon.Style = SvgIcon;
VisibilityIcon.displayName = 'VisibilityIcon';

export default VisibilityIcon
