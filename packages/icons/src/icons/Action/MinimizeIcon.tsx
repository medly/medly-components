import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import MinimizeIconSvg from '../../assets/Action/minimize_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MinimizeIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <MinimizeIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

MinimizeIcon.Style = SvgIcon;
MinimizeIcon.displayName = 'MinimizeIcon';

export default MinimizeIcon
