import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import TextsmsIconSvg from '../../assets/Communication/textsms_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TextsmsIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <TextsmsIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

TextsmsIcon.Style = SvgIcon;
TextsmsIcon.displayName = 'TextsmsIcon';

export default TextsmsIcon
