import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect860218LineIconSvg from '../../assets/GSDD/SideEffect_860_218_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect860218LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect860218LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect860218LineIcon.Style = SvgIcon;
SideEffect860218LineIcon.displayName = 'SideEffect860218LineIcon';

export default SideEffect860218LineIcon
