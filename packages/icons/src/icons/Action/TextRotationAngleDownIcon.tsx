import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import TextRotationAngleDownIconSvg from '../../assets/Action/text_rotation_angle_down_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <TextRotationAngleDownIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'TextRotationAngleDownIcon';

const TextRotationAngleDownIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon })

export default TextRotationAngleDownIcon
