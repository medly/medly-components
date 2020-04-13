import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import Rotate90DegreesCcwIconSvg from '../../assets/Image/rotate_90_degrees_ccw_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Rotate90DegreesCcwIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Rotate90DegreesCcwIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Rotate90DegreesCcwIcon.Style = SvgIcon;
Rotate90DegreesCcwIcon.displayName = 'Rotate90DegreesCcwIcon';

export default Rotate90DegreesCcwIcon
