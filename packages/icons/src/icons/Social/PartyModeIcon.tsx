import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import PartyModeIconSvg from '../../assets/Social/party_mode_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PartyModeIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PartyModeIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PartyModeIcon.Style = SvgIcon;
PartyModeIcon.displayName = 'PartyModeIcon';

export default PartyModeIcon
