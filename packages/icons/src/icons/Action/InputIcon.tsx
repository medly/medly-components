import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import InputIconSvg from '../../assets/Action/input_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const InputIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <InputIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

InputIcon.Style = SvgIcon;
InputIcon.displayName = 'InputIcon';

export default InputIcon
