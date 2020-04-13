import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import StarIconSvg from '../../assets/Toggle/star_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const StarIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <StarIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

StarIcon.Style = SvgIcon;
StarIcon.displayName = 'StarIcon';

export default StarIcon
