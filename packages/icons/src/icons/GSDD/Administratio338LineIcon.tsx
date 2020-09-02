import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administratio338LineIconSvg from '../../assets/GSDD/Administratio_338_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administratio338LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administratio338LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administratio338LineIcon.Style = SvgIcon;
Administratio338LineIcon.displayName = 'Administratio338LineIcon';

export default Administratio338LineIcon
