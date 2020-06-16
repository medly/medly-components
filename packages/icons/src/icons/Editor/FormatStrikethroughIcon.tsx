import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import FormatStrikethroughIconSvg from '../../assets/Editor/format_strikethrough_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FormatStrikethroughIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FormatStrikethroughIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FormatStrikethroughIcon.Style = SvgIcon;
FormatStrikethroughIcon.displayName = 'FormatStrikethroughIcon';

export default FormatStrikethroughIcon
