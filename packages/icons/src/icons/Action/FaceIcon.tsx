import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import FaceIconSvg from '../../assets/Action/face_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FaceIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FaceIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FaceIcon.Style = SvgIcon;
FaceIcon.displayName = 'FaceIcon';

export default FaceIcon
