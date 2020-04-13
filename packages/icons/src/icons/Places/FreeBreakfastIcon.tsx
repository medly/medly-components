import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FreeBreakfastIconSvg from '../../assets/Places/free_breakfast_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FreeBreakfastIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FreeBreakfastIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FreeBreakfastIcon.Style = SvgIcon;
FreeBreakfastIcon.displayName = 'FreeBreakfastIcon';

export default FreeBreakfastIcon
