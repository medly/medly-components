import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import MoodIconSvg from '../../assets/Social/mood_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MoodIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <MoodIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

MoodIcon.Style = SvgIcon;
MoodIcon.displayName = 'MoodIcon';

export default MoodIcon
