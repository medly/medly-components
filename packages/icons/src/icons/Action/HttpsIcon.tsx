import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import HttpsIconSvg from '../../assets/Action/https_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const HttpsIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <HttpsIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

HttpsIcon.Style = SvgIcon;
HttpsIcon.displayName = 'HttpsIcon';

export default HttpsIcon
