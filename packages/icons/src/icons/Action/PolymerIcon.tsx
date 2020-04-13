import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PolymerIconSvg from '../../assets/Action/polymer_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PolymerIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PolymerIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PolymerIcon.Style = SvgIcon;
PolymerIcon.displayName = 'PolymerIcon';

export default PolymerIcon
