import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DuoIconSvg from '../../assets/Communication/duo_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DuoIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <DuoIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

DuoIcon.Style = SvgIcon;
DuoIcon.displayName = 'DuoIcon';

export default DuoIcon
