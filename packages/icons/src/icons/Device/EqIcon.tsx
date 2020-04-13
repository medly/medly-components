import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import EqIconSvg from '../../assets/Device/eq_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const EqIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <EqIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

EqIcon.Style = SvgIcon;
EqIcon.displayName = 'EqIcon';

export default EqIcon
