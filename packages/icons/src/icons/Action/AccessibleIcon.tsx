import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AccessibleIconSvg from '../../assets/Action/accessible_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AccessibleIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <AccessibleIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

AccessibleIcon.Style = SvgIcon;
AccessibleIcon.displayName = 'AccessibleIcon';

export default AccessibleIcon
