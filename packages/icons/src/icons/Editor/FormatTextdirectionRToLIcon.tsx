import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FormatTextdirectionRToLIconSvg from '../../assets/Editor/format_textdirection_r_to_l_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FormatTextdirectionRToLIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FormatTextdirectionRToLIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FormatTextdirectionRToLIcon.Style = SvgIcon;
FormatTextdirectionRToLIcon.displayName = 'FormatTextdirectionRToLIcon';

export default FormatTextdirectionRToLIcon
