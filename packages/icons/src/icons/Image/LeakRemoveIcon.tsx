import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LeakRemoveIconSvg from '../../assets/Image/leak_remove_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LeakRemoveIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LeakRemoveIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LeakRemoveIcon.Style = SvgIcon;
LeakRemoveIcon.displayName = 'LeakRemoveIcon';

export default LeakRemoveIcon
