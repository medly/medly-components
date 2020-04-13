import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import StarsIconSvg from '../../assets/Action/stars_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const StarsIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <StarsIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

StarsIcon.Style = SvgIcon;
StarsIcon.displayName = 'StarsIcon';

export default StarsIcon
