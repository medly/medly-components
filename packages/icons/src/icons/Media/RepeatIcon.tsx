import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import RepeatIconSvg from '../../assets/Media/repeat_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RepeatIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <RepeatIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

RepeatIcon.Style = SvgIcon;
RepeatIcon.displayName = 'RepeatIcon';

export default RepeatIcon
