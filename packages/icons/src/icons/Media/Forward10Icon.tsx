import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import Forward10IconSvg from '../../assets/Media/forward_10_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Forward10Icon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Forward10IconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Forward10Icon.Style = SvgIcon;
Forward10Icon.displayName = 'Forward10Icon';

export default Forward10Icon
