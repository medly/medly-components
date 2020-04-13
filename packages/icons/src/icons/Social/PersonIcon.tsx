import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PersonIconSvg from '../../assets/Social/person_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PersonIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PersonIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PersonIcon.Style = SvgIcon;
PersonIcon.displayName = 'PersonIcon';

export default PersonIcon
