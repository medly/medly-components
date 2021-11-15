import { WithStyle } from '@medly-components/utils';
import { memo, FC } from 'react';
import Action3dRotationIconSvg from '../../assets/Action/action_3d_rotation_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Action3dRotationIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'Action3dRotationIcon';

const Action3dRotationIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default Action3dRotationIcon;
