import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import FaceUnlockIconSvg from '../../assets/Action/face_unlock_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FaceUnlockIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FaceUnlockIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FaceUnlockIcon.Style = SvgIcon;
FaceUnlockIcon.displayName = 'FaceUnlockIcon';

export default FaceUnlockIcon
