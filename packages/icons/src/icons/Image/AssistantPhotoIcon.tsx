import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import AssistantPhotoIconSvg from '../../assets/Image/assistant_photo_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AssistantPhotoIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'AssistantPhotoIcon';

const AssistantPhotoIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default AssistantPhotoIcon;
