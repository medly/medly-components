import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import RemoveIconSvg from '../../assets/Content/remove_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RemoveIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <RemoveIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

RemoveIcon.Style = SvgIcon;
RemoveIcon.displayName = 'RemoveIcon';

export default RemoveIcon
