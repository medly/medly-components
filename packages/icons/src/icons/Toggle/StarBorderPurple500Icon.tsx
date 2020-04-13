import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import StarBorderPurple500IconSvg from '../../assets/Toggle/star_border_purple500_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const StarBorderPurple500Icon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <StarBorderPurple500IconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

StarBorderPurple500Icon.Style = SvgIcon;
StarBorderPurple500Icon.displayName = 'StarBorderPurple500Icon';

export default StarBorderPurple500Icon
