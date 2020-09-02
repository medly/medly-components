import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Caution76LineIconSvg from '../../assets/GSDD/Caution_76_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Caution76LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Caution76LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Caution76LineIcon.Style = SvgIcon;
Caution76LineIcon.displayName = 'Caution76LineIcon';

export default Caution76LineIcon
