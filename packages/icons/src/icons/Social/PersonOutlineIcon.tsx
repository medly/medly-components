import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PersonOutlineIconSvg from '../../assets/Social/person_outline_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PersonOutlineIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PersonOutlineIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PersonOutlineIcon.Style = SvgIcon;
PersonOutlineIcon.displayName = 'PersonOutlineIcon';

export default PersonOutlineIcon
