import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import GrainIconSvg from '../../assets/Image/grain_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const GrainIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <GrainIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

GrainIcon.Style = SvgIcon;
GrainIcon.displayName = 'GrainIcon';

export default GrainIcon
