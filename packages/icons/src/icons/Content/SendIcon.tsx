import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SendIconSvg from '../../assets/Content/send_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SendIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SendIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SendIcon.Style = SvgIcon;
SendIcon.displayName = 'SendIcon';

export default SendIcon
