import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import HighlightOffIconSvg from '../../assets/Action/highlight_off_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const HighlightOffIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <HighlightOffIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

HighlightOffIcon.Style = SvgIcon;
HighlightOffIcon.displayName = 'HighlightOffIcon';

export default HighlightOffIcon
