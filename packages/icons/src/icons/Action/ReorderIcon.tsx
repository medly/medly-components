import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ReorderIconSvg from '../../assets/Action/reorder_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ReorderIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ReorderIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ReorderIcon.Style = SvgIcon;
ReorderIcon.displayName = 'ReorderIcon';

export default ReorderIcon
