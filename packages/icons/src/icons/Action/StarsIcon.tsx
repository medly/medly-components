import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import StarsIconSvg from '../../assets/Action/stars_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const StarsIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <StarsIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

StarsIcon.Style = SvgIcon;
StarsIcon.displayName = 'StarsIcon';

export default StarsIcon
