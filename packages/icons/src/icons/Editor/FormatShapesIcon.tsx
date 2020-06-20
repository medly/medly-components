import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import FormatShapesIconSvg from '../../assets/Editor/format_shapes_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FormatShapesIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FormatShapesIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FormatShapesIcon.Style = SvgIcon;
FormatShapesIcon.displayName = 'FormatShapesIcon';

export default FormatShapesIcon
