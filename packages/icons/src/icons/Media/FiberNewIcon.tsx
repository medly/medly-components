import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import FiberNewIconSvg from '../../assets/Media/fiber_new_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FiberNewIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FiberNewIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FiberNewIcon.Style = SvgIcon;
FiberNewIcon.displayName = 'FiberNewIcon';

export default FiberNewIcon
