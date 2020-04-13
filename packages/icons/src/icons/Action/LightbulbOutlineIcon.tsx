import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LightbulbOutlineIconSvg from '../../assets/Action/lightbulb_outline_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LightbulbOutlineIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <LightbulbOutlineIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

LightbulbOutlineIcon.Style = SvgIcon;
LightbulbOutlineIcon.displayName = 'LightbulbOutlineIcon';

export default LightbulbOutlineIcon
