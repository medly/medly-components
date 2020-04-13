import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PictureInPictureIconSvg from '../../assets/Action/picture_in_picture_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PictureInPictureIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PictureInPictureIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PictureInPictureIcon.Style = SvgIcon;
PictureInPictureIcon.displayName = 'PictureInPictureIcon';

export default PictureInPictureIcon
