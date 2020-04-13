import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import StarPurple500IconSvg from '../../assets/Toggle/star_purple500_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const StarPurple500Icon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <StarPurple500IconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

StarPurple500Icon.Style = SvgIcon;
StarPurple500Icon.displayName = 'StarPurple500Icon';

export default StarPurple500Icon
