import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import RadioIconSvg from '../../assets/Media/radio_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RadioIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <RadioIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

RadioIcon.Style = SvgIcon;
RadioIcon.displayName = 'RadioIcon';

export default RadioIcon
