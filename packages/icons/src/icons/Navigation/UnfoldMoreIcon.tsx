import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import UnfoldMoreIconSvg from '../../assets/Navigation/unfold_more_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const UnfoldMoreIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <UnfoldMoreIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

UnfoldMoreIcon.Style = SvgIcon;
UnfoldMoreIcon.displayName = 'UnfoldMoreIcon';

export default UnfoldMoreIcon
