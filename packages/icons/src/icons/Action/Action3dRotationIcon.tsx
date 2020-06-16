import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Action3dRotationIconSvg from '../../assets/Action/action_3d_rotation_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Action3dRotationIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Action3dRotationIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Action3dRotationIcon.Style = SvgIcon;
Action3dRotationIcon.displayName = 'Action3dRotationIcon';

export default Action3dRotationIcon
