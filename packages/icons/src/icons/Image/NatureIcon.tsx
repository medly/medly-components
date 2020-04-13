import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import NatureIconSvg from '../../assets/Image/nature_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const NatureIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <NatureIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

NatureIcon.Style = SvgIcon;
NatureIcon.displayName = 'NatureIcon';

export default NatureIcon
