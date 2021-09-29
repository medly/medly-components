import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import PictureInPictureAltIconSvg from '../../assets/Action/picture_in_picture_alt_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PictureInPictureAltIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'PictureInPictureAltIcon';

const PictureInPictureAltIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon })

export default PictureInPictureAltIcon
