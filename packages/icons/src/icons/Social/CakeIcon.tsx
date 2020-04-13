import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CakeIconSvg from '../../assets/Social/cake_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CakeIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CakeIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CakeIcon.Style = SvgIcon;
CakeIcon.displayName = 'CakeIcon';

export default CakeIcon
