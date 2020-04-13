import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import TextFormatIconSvg from '../../assets/Content/text_format_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TextFormatIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <TextFormatIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

TextFormatIcon.Style = SvgIcon;
TextFormatIcon.displayName = 'TextFormatIcon';

export default TextFormatIcon
