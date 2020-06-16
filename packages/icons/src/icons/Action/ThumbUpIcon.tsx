import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ThumbUpIconSvg from '../../assets/Action/thumb_up_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ThumbUpIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ThumbUpIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ThumbUpIcon.Style = SvgIcon;
ThumbUpIcon.displayName = 'ThumbUpIcon';

export default ThumbUpIcon
