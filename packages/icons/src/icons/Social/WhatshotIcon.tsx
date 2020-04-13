import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import WhatshotIconSvg from '../../assets/Social/whatshot_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const WhatshotIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <WhatshotIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

WhatshotIcon.Style = SvgIcon;
WhatshotIcon.displayName = 'WhatshotIcon';

export default WhatshotIcon
