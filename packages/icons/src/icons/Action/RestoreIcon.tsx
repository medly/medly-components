import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import RestoreIconSvg from '../../assets/Action/restore_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RestoreIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <RestoreIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

RestoreIcon.Style = SvgIcon;
RestoreIcon.displayName = 'RestoreIcon';

export default RestoreIcon
