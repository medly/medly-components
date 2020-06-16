import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ThumbUpAltIconSvg from '../../assets/Social/thumb_up_alt_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ThumbUpAltIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ThumbUpAltIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ThumbUpAltIcon.Style = SvgIcon;
ThumbUpAltIcon.displayName = 'ThumbUpAltIcon';

export default ThumbUpAltIcon
