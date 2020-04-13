import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SchoolIconSvg from '../../assets/Social/school_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SchoolIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SchoolIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SchoolIcon.Style = SvgIcon;
SchoolIcon.displayName = 'SchoolIcon';

export default SchoolIcon
