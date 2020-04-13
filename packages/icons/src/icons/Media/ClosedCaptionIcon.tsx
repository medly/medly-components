import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ClosedCaptionIconSvg from '../../assets/Media/closed_caption_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ClosedCaptionIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ClosedCaptionIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ClosedCaptionIcon.Style = SvgIcon;
ClosedCaptionIcon.displayName = 'ClosedCaptionIcon';

export default ClosedCaptionIcon
