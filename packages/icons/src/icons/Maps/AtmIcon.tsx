import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AtmIconSvg from '../../assets/Maps/atm_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AtmIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <AtmIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

AtmIcon.Style = SvgIcon;
AtmIcon.displayName = 'AtmIcon';

export default AtmIcon
