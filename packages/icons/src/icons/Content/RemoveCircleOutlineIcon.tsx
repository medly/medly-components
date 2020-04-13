import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import RemoveCircleOutlineIconSvg from '../../assets/Content/remove_circle_outline_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RemoveCircleOutlineIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <RemoveCircleOutlineIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

RemoveCircleOutlineIcon.Style = SvgIcon;
RemoveCircleOutlineIcon.displayName = 'RemoveCircleOutlineIcon';

export default RemoveCircleOutlineIcon
