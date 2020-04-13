import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import RadioButtonCheckedIconSvg from '../../assets/Toggle/radio_button_checked_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RadioButtonCheckedIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <RadioButtonCheckedIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

RadioButtonCheckedIcon.Style = SvgIcon;
RadioButtonCheckedIcon.displayName = 'RadioButtonCheckedIcon';

export default RadioButtonCheckedIcon
