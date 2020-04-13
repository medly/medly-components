import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import StarOutlineIconSvg from '../../assets/Toggle/star_outline_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const StarOutlineIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <StarOutlineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

StarOutlineIcon.Style = SvgIcon;
StarOutlineIcon.displayName = 'StarOutlineIcon';

export default StarOutlineIcon
