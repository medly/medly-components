import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AssistantPhotoIconSvg from '../../assets/Image/assistant_photo_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AssistantPhotoIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AssistantPhotoIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

AssistantPhotoIcon.Style = SvgIcon;
AssistantPhotoIcon.displayName = 'AssistantPhotoIcon';

export default AssistantPhotoIcon
