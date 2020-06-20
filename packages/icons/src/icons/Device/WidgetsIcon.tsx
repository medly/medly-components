import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import WidgetsIconSvg from '../../assets/Device/widgets_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const WidgetsIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <WidgetsIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

WidgetsIcon.Style = SvgIcon;
WidgetsIcon.displayName = 'WidgetsIcon';

export default WidgetsIcon
