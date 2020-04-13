import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import NaturePeopleIconSvg from '../../assets/Image/nature_people_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const NaturePeopleIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <NaturePeopleIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

NaturePeopleIcon.Style = SvgIcon;
NaturePeopleIcon.displayName = 'NaturePeopleIcon';

export default NaturePeopleIcon
