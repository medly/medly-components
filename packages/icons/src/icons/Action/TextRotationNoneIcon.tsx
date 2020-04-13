import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import TextRotationNoneIconSvg from '../../assets/Action/text_rotation_none_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TextRotationNoneIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <TextRotationNoneIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

TextRotationNoneIcon.Style = SvgIcon;
TextRotationNoneIcon.displayName = 'TextRotationNoneIcon';

export default TextRotationNoneIcon
