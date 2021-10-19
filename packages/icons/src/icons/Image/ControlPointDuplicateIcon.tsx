import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ControlPointDuplicateIconSvg from '../../assets/Image/control_point_duplicate_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ControlPointDuplicateIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'ControlPointDuplicateIcon';

const ControlPointDuplicateIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default ControlPointDuplicateIcon;
