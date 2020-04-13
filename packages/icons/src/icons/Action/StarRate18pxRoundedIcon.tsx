import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import StarRate18pxRoundedIconSvg from '../../assets/Action/star_rate_18px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const StarRate18pxRoundedIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <StarRate18pxRoundedIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

StarRate18pxRoundedIcon.Style = SvgIcon;
StarRate18pxRoundedIcon.displayName = 'StarRate18pxRoundedIcon';

export default StarRate18pxRoundedIcon
