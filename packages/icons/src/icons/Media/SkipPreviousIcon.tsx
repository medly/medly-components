import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SkipPreviousIconSvg from '../../assets/Media/skip_previous_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SkipPreviousIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SkipPreviousIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SkipPreviousIcon.Style = SvgIcon;
SkipPreviousIcon.displayName = 'SkipPreviousIcon';

export default SkipPreviousIcon
