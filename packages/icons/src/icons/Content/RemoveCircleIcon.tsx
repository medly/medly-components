import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import RemoveCircleIconSvg from '../../assets/Content/remove_circle_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RemoveCircleIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <RemoveCircleIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

RemoveCircleIcon.Style = SvgIcon;
RemoveCircleIcon.displayName = 'RemoveCircleIcon';

export default RemoveCircleIcon
