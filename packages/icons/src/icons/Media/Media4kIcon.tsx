import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Media4kIconSvg from '../../assets/Media/media_4k_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Media4kIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Media4kIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Media4kIcon.Style = SvgIcon;
Media4kIcon.displayName = 'Media4kIcon';

export default Media4kIcon
