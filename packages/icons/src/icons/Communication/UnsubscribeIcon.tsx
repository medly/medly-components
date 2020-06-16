import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import UnsubscribeIconSvg from '../../assets/Communication/unsubscribe_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const UnsubscribeIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <UnsubscribeIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

UnsubscribeIcon.Style = SvgIcon;
UnsubscribeIcon.displayName = 'UnsubscribeIcon';

export default UnsubscribeIcon
