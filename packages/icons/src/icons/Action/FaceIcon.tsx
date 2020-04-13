import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FaceIconSvg from '../../assets/Action/face_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FaceIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FaceIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FaceIcon.Style = SvgIcon;
FaceIcon.displayName = 'FaceIcon';

export default FaceIcon
