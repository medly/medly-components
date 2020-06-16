import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import LineStyleIconSvg from '../../assets/Action/line_style_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LineStyleIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LineStyleIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LineStyleIcon.Style = SvgIcon;
LineStyleIcon.displayName = 'LineStyleIcon';

export default LineStyleIcon
