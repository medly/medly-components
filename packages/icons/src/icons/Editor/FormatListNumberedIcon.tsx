import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FormatListNumberedIconSvg from '../../assets/Editor/format_list_numbered_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FormatListNumberedIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FormatListNumberedIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FormatListNumberedIcon.Style = SvgIcon;
FormatListNumberedIcon.displayName = 'FormatListNumberedIcon';

export default FormatListNumberedIcon
