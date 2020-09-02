import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary30LineIconSvg from '../../assets/GSDD/Dietary_30_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary30LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary30LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary30LineIcon.Style = SvgIcon;
Dietary30LineIcon.displayName = 'Dietary30LineIcon';

export default Dietary30LineIcon
