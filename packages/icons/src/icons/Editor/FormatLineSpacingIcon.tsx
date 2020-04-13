import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FormatLineSpacingIconSvg from '../../assets/Editor/format_line_spacing_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FormatLineSpacingIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FormatLineSpacingIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FormatLineSpacingIcon.Style = SvgIcon;
FormatLineSpacingIcon.displayName = 'FormatLineSpacingIcon';

export default FormatLineSpacingIcon
