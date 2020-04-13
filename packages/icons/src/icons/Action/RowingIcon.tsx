import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import RowingIconSvg from '../../assets/Action/rowing_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RowingIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <RowingIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

RowingIcon.Style = SvgIcon;
RowingIcon.displayName = 'RowingIcon';

export default RowingIcon
