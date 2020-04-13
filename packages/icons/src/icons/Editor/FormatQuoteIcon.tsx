import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FormatQuoteIconSvg from '../../assets/Editor/format_quote_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FormatQuoteIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FormatQuoteIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FormatQuoteIcon.Style = SvgIcon;
FormatQuoteIcon.displayName = 'FormatQuoteIcon';

export default FormatQuoteIcon
