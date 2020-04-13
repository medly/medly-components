import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import HorizontalSplitIconSvg from '../../assets/Action/horizontal_split_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const HorizontalSplitIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <HorizontalSplitIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

HorizontalSplitIcon.Style = SvgIcon;
HorizontalSplitIcon.displayName = 'HorizontalSplitIcon';

export default HorizontalSplitIcon
