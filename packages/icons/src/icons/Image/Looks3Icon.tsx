import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Looks3IconSvg from '../../assets/Image/looks_3_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Looks3Icon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Looks3IconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Looks3Icon.Style = SvgIcon;
Looks3Icon.displayName = 'Looks3Icon';

export default Looks3Icon
