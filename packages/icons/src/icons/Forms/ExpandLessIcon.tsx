import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ExpandLessIconSvg from '../../assets/Forms/ExpandLess.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ExpandLessIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ExpandLessIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ExpandLessIcon.Style = SvgIcon;
ExpandLessIcon.displayName = 'ExpandLessIcon';

export default ExpandLessIcon
