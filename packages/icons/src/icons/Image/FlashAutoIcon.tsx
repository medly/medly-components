import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FlashAutoIconSvg from '../../assets/Image/flash_auto_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FlashAutoIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FlashAutoIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FlashAutoIcon.Style = SvgIcon;
FlashAutoIcon.displayName = 'FlashAutoIcon';

export default FlashAutoIcon
