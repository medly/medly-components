import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import TextureIconSvg from '../../assets/Image/texture_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TextureIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <TextureIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

TextureIcon.Style = SvgIcon;
TextureIcon.displayName = 'TextureIcon';

export default TextureIcon
