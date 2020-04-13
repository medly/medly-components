import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PeopleIconSvg from '../../assets/Social/people_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PeopleIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PeopleIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PeopleIcon.Style = SvgIcon;
PeopleIcon.displayName = 'PeopleIcon';

export default PeopleIcon
