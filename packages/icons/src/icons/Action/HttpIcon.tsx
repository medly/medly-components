import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import HttpIconSvg from '../../assets/Action/http_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const HttpIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <HttpIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

HttpIcon.Style = SvgIcon;
HttpIcon.displayName = 'HttpIcon';

export default HttpIcon
