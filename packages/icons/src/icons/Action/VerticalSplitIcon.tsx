import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import VerticalSplitIconSvg from '../../assets/Action/vertical_split_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const VerticalSplitIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <VerticalSplitIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

VerticalSplitIcon.Style = SvgIcon;
VerticalSplitIcon.displayName = 'VerticalSplitIcon';

export default VerticalSplitIcon
