import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import TonalityIconSvg from '../../assets/Image/tonality_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TonalityIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <TonalityIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

TonalityIcon.Style = SvgIcon;
TonalityIcon.displayName = 'TonalityIcon';

export default TonalityIcon
