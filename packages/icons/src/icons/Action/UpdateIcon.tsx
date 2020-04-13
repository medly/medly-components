import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import UpdateIconSvg from '../../assets/Action/update_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const UpdateIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <UpdateIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

UpdateIcon.Style = SvgIcon;
UpdateIcon.displayName = 'UpdateIcon';

export default UpdateIcon
