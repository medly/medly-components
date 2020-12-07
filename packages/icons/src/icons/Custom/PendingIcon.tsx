import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import PendingIconSvg from '../../assets/Custom/pending_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PendingIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PendingIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PendingIcon.Style = SvgIcon;
PendingIcon.displayName = 'PendingIcon';

export default PendingIcon
