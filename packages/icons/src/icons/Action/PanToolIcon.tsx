import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import PanToolIconSvg from '../../assets/Action/pan_tool_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PanToolIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PanToolIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PanToolIcon.Style = SvgIcon;
PanToolIcon.displayName = 'PanToolIcon';

export default PanToolIcon
