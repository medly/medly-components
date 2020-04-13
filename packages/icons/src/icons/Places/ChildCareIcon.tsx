import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ChildCareIconSvg from '../../assets/Places/child_care_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ChildCareIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ChildCareIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ChildCareIcon.Style = SvgIcon;
ChildCareIcon.displayName = 'ChildCareIcon';

export default ChildCareIcon
