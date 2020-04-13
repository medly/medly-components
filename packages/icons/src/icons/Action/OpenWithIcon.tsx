import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import OpenWithIconSvg from '../../assets/Action/open_with_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const OpenWithIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <OpenWithIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

OpenWithIcon.Style = SvgIcon;
OpenWithIcon.displayName = 'OpenWithIcon';

export default OpenWithIcon
