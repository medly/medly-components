import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import MoodBadIconSvg from '../../assets/Social/mood_bad_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MoodBadIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <MoodBadIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

MoodBadIcon.Style = SvgIcon;
MoodBadIcon.displayName = 'MoodBadIcon';

export default MoodBadIcon
