import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import HourglassFullIconSvg from '../../assets/Action/hourglass_full_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const HourglassFullIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <HourglassFullIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

HourglassFullIcon.Style = SvgIcon;
HourglassFullIcon.displayName = 'HourglassFullIcon';

export default HourglassFullIcon
