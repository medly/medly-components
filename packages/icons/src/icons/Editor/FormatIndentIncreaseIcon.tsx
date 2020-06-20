import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import FormatIndentIncreaseIconSvg from '../../assets/Editor/format_indent_increase_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FormatIndentIncreaseIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FormatIndentIncreaseIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FormatIndentIncreaseIcon.Style = SvgIcon;
FormatIndentIncreaseIcon.displayName = 'FormatIndentIncreaseIcon';

export default FormatIndentIncreaseIcon
