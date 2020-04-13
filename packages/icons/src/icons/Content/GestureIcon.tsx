import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import GestureIconSvg from '../../assets/Content/gesture_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const GestureIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <GestureIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

GestureIcon.Style = SvgIcon;
GestureIcon.displayName = 'GestureIcon';

export default GestureIcon
