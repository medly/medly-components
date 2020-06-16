import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import FormatPaintIconSvg from '../../assets/Editor/format_paint_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FormatPaintIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FormatPaintIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FormatPaintIcon.Style = SvgIcon;
FormatPaintIcon.displayName = 'FormatPaintIcon';

export default FormatPaintIcon
