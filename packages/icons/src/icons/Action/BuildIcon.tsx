import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BuildIconSvg from '../../assets/Action/build_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BuildIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <BuildIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

BuildIcon.Style = SvgIcon;
BuildIcon.displayName = 'BuildIcon';

export default BuildIcon
