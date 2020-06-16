import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import InvertColorsIconSvg from '../../assets/Action/invert_colors_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const InvertColorsIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <InvertColorsIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

InvertColorsIcon.Style = SvgIcon;
InvertColorsIcon.displayName = 'InvertColorsIcon';

export default InvertColorsIcon
