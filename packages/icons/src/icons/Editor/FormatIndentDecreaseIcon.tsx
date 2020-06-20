import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import FormatIndentDecreaseIconSvg from '../../assets/Editor/format_indent_decrease_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FormatIndentDecreaseIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FormatIndentDecreaseIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FormatIndentDecreaseIcon.Style = SvgIcon;
FormatIndentDecreaseIcon.displayName = 'FormatIndentDecreaseIcon';

export default FormatIndentDecreaseIcon
