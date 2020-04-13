import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import InvertColorsOffIconSvg from '../../assets/Communication/invert_colors_off_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const InvertColorsOffIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <InvertColorsOffIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

InvertColorsOffIcon.Style = SvgIcon;
InvertColorsOffIcon.displayName = 'InvertColorsOffIcon';

export default InvertColorsOffIcon
