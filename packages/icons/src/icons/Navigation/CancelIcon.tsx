import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import CancelIconSvg from '../../assets/Navigation/cancel_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CancelIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CancelIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CancelIcon.Style = SvgIcon;
CancelIcon.displayName = 'CancelIcon';

export default CancelIcon
