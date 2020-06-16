import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ViewComfyIconSvg from '../../assets/Image/view_comfy_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ViewComfyIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ViewComfyIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ViewComfyIcon.Style = SvgIcon;
ViewComfyIcon.displayName = 'ViewComfyIcon';

export default ViewComfyIcon
