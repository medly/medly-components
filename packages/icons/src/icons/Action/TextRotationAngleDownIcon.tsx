import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import TextRotationAngleDownIconSvg from '../../assets/Action/text_rotation_angle_down_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TextRotationAngleDownIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <TextRotationAngleDownIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

TextRotationAngleDownIcon.Style = SvgIcon;
TextRotationAngleDownIcon.displayName = 'TextRotationAngleDownIcon';

export default TextRotationAngleDownIcon
