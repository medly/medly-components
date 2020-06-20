import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import OfflineBoltIconSvg from '../../assets/Action/offline_bolt_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const OfflineBoltIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <OfflineBoltIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

OfflineBoltIcon.Style = SvgIcon;
OfflineBoltIcon.displayName = 'OfflineBoltIcon';

export default OfflineBoltIcon
