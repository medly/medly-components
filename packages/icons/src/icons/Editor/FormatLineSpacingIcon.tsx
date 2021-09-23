import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import FormatLineSpacingIconSvg from '../../assets/Editor/format_line_spacing_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FormatLineSpacingIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'FormatLineSpacingIcon';

const FormatLineSpacingIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon })

export default FormatLineSpacingIcon
