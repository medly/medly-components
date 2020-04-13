import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import StarPurple500IconSvg from '../../assets/Toggle/star_purple500_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const StarPurple500Icon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <StarPurple500IconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

StarPurple500Icon.Style = SvgIcon;
StarPurple500Icon.displayName = 'StarPurple500Icon';

export default StarPurple500Icon
