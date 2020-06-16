import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import FormatSizeIconSvg from '../../assets/Editor/format_size_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FormatSizeIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FormatSizeIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FormatSizeIcon.Style = SvgIcon;
FormatSizeIcon.displayName = 'FormatSizeIcon';

export default FormatSizeIcon
