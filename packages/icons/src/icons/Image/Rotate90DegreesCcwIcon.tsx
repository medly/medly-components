import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Rotate90DegreesCcwIconSvg from '../../assets/Image/rotate_90_degrees_ccw_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Rotate90DegreesCcwIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'Rotate90DegreesCcwIcon';

const Rotate90DegreesCcwIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon })

export default Rotate90DegreesCcwIcon
