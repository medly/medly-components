import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import UnfoldMoreIconSvg from '../../assets/Navigation/unfold_more_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const UnfoldMoreIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <UnfoldMoreIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

UnfoldMoreIcon.Style = SvgIcon;
UnfoldMoreIcon.displayName = 'UnfoldMoreIcon';

export default UnfoldMoreIcon
