import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import TextureIconSvg from '../../assets/Image/texture_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TextureIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <TextureIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

TextureIcon.Style = SvgIcon;
TextureIcon.displayName = 'TextureIcon';

export default TextureIcon
