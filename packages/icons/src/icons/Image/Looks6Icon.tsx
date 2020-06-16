import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Looks6IconSvg from '../../assets/Image/looks_6_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Looks6Icon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Looks6IconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Looks6Icon.Style = SvgIcon;
Looks6Icon.displayName = 'Looks6Icon';

export default Looks6Icon
