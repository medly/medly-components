import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ThumbDownIconSvg from '../../assets/Action/thumb_down_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ThumbDownIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ThumbDownIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ThumbDownIcon.Style = SvgIcon;
ThumbDownIcon.displayName = 'ThumbDownIcon';

export default ThumbDownIcon
