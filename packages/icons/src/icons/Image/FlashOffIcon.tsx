import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FlashOffIconSvg from '../../assets/Image/flash_off_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FlashOffIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FlashOffIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FlashOffIcon.Style = SvgIcon;
FlashOffIcon.displayName = 'FlashOffIcon';

export default FlashOffIcon
