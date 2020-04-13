import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PictureInPictureAltIconSvg from '../../assets/Action/picture_in_picture_alt_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PictureInPictureAltIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PictureInPictureAltIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PictureInPictureAltIcon.Style = SvgIcon;
PictureInPictureAltIcon.displayName = 'PictureInPictureAltIcon';

export default PictureInPictureAltIcon
