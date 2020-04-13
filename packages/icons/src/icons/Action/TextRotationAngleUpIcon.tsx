import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import TextRotationAngleUpIconSvg from '../../assets/Action/text_rotation_angle_up_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TextRotationAngleUpIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <TextRotationAngleUpIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

TextRotationAngleUpIcon.Style = SvgIcon;
TextRotationAngleUpIcon.displayName = 'TextRotationAngleUpIcon';

export default TextRotationAngleUpIcon
