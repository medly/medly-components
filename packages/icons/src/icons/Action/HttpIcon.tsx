import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import HttpIconSvg from '../../assets/Action/http_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const HttpIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <HttpIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

HttpIcon.Style = SvgIcon;
HttpIcon.displayName = 'HttpIcon';

export default HttpIcon
