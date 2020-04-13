import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ClassIconSvg from '../../assets/Action/class_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ClassIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ClassIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ClassIcon.Style = SvgIcon;
ClassIcon.displayName = 'ClassIcon';

export default ClassIcon
