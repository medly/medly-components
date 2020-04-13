import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import TextFieldsIconSvg from '../../assets/Editor/text_fields_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TextFieldsIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <TextFieldsIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

TextFieldsIcon.Style = SvgIcon;
TextFieldsIcon.displayName = 'TextFieldsIcon';

export default TextFieldsIcon
