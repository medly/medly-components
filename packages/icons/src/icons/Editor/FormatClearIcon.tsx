import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FormatClearIconSvg from '../../assets/Editor/format_clear_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FormatClearIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FormatClearIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FormatClearIcon.Style = SvgIcon;
FormatClearIcon.displayName = 'FormatClearIcon';

export default FormatClearIcon
