import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import AutorenewIconSvg from '../../assets/Action/autorenew_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AutorenewIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AutorenewIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

AutorenewIcon.Style = SvgIcon;
AutorenewIcon.displayName = 'AutorenewIcon';

export default AutorenewIcon
