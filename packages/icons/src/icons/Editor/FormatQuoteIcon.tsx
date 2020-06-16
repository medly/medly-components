import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import FormatQuoteIconSvg from '../../assets/Editor/format_quote_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FormatQuoteIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FormatQuoteIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FormatQuoteIcon.Style = SvgIcon;
FormatQuoteIcon.displayName = 'FormatQuoteIcon';

export default FormatQuoteIcon
