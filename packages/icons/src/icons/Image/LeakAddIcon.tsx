import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import LeakAddIconSvg from '../../assets/Image/leak_add_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LeakAddIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LeakAddIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LeakAddIcon.Style = SvgIcon;
LeakAddIcon.displayName = 'LeakAddIcon';

export default LeakAddIcon
