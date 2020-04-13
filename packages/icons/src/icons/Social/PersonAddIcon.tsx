import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PersonAddIconSvg from '../../assets/Social/person_add_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PersonAddIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PersonAddIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PersonAddIcon.Style = SvgIcon;
PersonAddIcon.displayName = 'PersonAddIcon';

export default PersonAddIcon
