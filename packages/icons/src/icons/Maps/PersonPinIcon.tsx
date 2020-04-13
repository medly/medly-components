import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PersonPinIconSvg from '../../assets/Maps/person_pin_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PersonPinIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PersonPinIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PersonPinIcon.Style = SvgIcon;
PersonPinIcon.displayName = 'PersonPinIcon';

export default PersonPinIcon
