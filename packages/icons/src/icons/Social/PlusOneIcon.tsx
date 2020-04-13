import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PlusOneIconSvg from '../../assets/Social/plus_one_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PlusOneIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PlusOneIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PlusOneIcon.Style = SvgIcon;
PlusOneIcon.displayName = 'PlusOneIcon';

export default PlusOneIcon
