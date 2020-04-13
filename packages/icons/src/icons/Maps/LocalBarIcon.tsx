import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LocalBarIconSvg from '../../assets/Maps/local_bar_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LocalBarIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LocalBarIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LocalBarIcon.Style = SvgIcon;
LocalBarIcon.displayName = 'LocalBarIcon';

export default LocalBarIcon
