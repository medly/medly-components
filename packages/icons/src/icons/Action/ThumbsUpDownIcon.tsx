import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ThumbsUpDownIconSvg from '../../assets/Action/thumbs_up_down_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ThumbsUpDownIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ThumbsUpDownIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ThumbsUpDownIcon.Style = SvgIcon;
ThumbsUpDownIcon.displayName = 'ThumbsUpDownIcon';

export default ThumbsUpDownIcon
