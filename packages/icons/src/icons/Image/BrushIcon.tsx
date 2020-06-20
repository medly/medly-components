import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import BrushIconSvg from '../../assets/Image/brush_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BrushIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <BrushIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

BrushIcon.Style = SvgIcon;
BrushIcon.displayName = 'BrushIcon';

export default BrushIcon
