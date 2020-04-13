import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FaceUnlockIconSvg from '../../assets/Action/face_unlock_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FaceUnlockIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FaceUnlockIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FaceUnlockIcon.Style = SvgIcon;
FaceUnlockIcon.displayName = 'FaceUnlockIcon';

export default FaceUnlockIcon
