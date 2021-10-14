import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ConfirmationNumberIconSvg from '../../assets/Notification/confirmation_number_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ConfirmationNumberIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'ConfirmationNumberIcon';

const ConfirmationNumberIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default ConfirmationNumberIcon;
