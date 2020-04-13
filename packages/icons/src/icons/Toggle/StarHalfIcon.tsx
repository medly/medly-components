import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import StarHalfIconSvg from '../../assets/Toggle/star_half_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const StarHalfIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <StarHalfIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

StarHalfIcon.Style = SvgIcon;
StarHalfIcon.displayName = 'StarHalfIcon';

export default StarHalfIcon
