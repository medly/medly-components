import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ExploreOffIconSvg from '../../assets/Action/explore_off_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ExploreOffIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ExploreOffIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ExploreOffIcon.Style = SvgIcon;
ExploreOffIcon.displayName = 'ExploreOffIcon';

export default ExploreOffIcon
