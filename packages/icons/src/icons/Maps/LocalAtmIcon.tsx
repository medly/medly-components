import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LocalAtmIconSvg from '../../assets/Maps/local_atm_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LocalAtmIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <LocalAtmIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

LocalAtmIcon.Style = SvgIcon;
LocalAtmIcon.displayName = 'LocalAtmIcon';

export default LocalAtmIcon
