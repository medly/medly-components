import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import RadioButtonUncheckedIconSvg from '../../assets/Toggle/radio_button_unchecked_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RadioButtonUncheckedIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <RadioButtonUncheckedIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

RadioButtonUncheckedIcon.Style = SvgIcon;
RadioButtonUncheckedIcon.displayName = 'RadioButtonUncheckedIcon';

export default RadioButtonUncheckedIcon
