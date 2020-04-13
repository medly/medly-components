import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AspectRatioIconSvg from '../../assets/Action/aspect_ratio_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AspectRatioIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AspectRatioIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

AspectRatioIcon.Style = SvgIcon;
AspectRatioIcon.displayName = 'AspectRatioIcon';

export default AspectRatioIcon
