import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import TextRotationDownIconSvg from '../../assets/Action/text_rotation_down_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TextRotationDownIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <TextRotationDownIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

TextRotationDownIcon.Style = SvgIcon;
TextRotationDownIcon.displayName = 'TextRotationDownIcon';

export default TextRotationDownIcon
