import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FlashOnIconSvg from '../../assets/Image/flash_on_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FlashOnIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FlashOnIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FlashOnIcon.Style = SvgIcon;
FlashOnIcon.displayName = 'FlashOnIcon';

export default FlashOnIcon
