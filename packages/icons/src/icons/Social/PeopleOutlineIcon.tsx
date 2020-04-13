import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PeopleOutlineIconSvg from '../../assets/Social/people_outline_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PeopleOutlineIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PeopleOutlineIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PeopleOutlineIcon.Style = SvgIcon;
PeopleOutlineIcon.displayName = 'PeopleOutlineIcon';

export default PeopleOutlineIcon
