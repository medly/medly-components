import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AssistantPhotoIconSvg from '../../assets/Image/assistant_photo_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AssistantPhotoIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <AssistantPhotoIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

AssistantPhotoIcon.Style = SvgIcon;
AssistantPhotoIcon.displayName = 'AssistantPhotoIcon';

export default AssistantPhotoIcon
