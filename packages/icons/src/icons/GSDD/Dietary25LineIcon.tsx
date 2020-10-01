import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary25LineIconSvg from '../../assets/GSDD/Dietary_25_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary25LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary25LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary25LineIcon.Style = SvgIcon;
Dietary25LineIcon.displayName = 'Dietary25LineIcon';

export default Dietary25LineIcon
