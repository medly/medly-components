import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import VerticalAlignBottomIconSvg from '../../assets/Editor/vertical_align_bottom_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const VerticalAlignBottomIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <VerticalAlignBottomIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

VerticalAlignBottomIcon.Style = SvgIcon;
VerticalAlignBottomIcon.displayName = 'VerticalAlignBottomIcon';

export default VerticalAlignBottomIcon
