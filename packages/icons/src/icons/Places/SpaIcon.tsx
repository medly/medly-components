import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SpaIconSvg from '../../assets/Places/spa_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SpaIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SpaIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SpaIcon.Style = SvgIcon;
SpaIcon.displayName = 'SpaIcon';

export default SpaIcon
