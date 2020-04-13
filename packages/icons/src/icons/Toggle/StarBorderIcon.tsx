import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import StarBorderIconSvg from '../../assets/Toggle/star_border_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const StarBorderIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <StarBorderIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

StarBorderIcon.Style = SvgIcon;
StarBorderIcon.displayName = 'StarBorderIcon';

export default StarBorderIcon
