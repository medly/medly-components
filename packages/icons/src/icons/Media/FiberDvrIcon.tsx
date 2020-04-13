import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FiberDvrIconSvg from '../../assets/Media/fiber_dvr_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FiberDvrIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FiberDvrIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FiberDvrIcon.Style = SvgIcon;
FiberDvrIcon.displayName = 'FiberDvrIcon';

export default FiberDvrIcon
