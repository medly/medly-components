import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary316LineIconSvg from '../../assets/GSDD/Dietary_316_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary316LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary316LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary316LineIcon.Style = SvgIcon;
Dietary316LineIcon.displayName = 'Dietary316LineIcon';

export default Dietary316LineIcon
