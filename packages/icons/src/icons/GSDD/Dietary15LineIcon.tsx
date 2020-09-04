import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary15LineIconSvg from '../../assets/GSDD/Dietary_15_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary15LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary15LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary15LineIcon.Style = SvgIcon;
Dietary15LineIcon.displayName = 'Dietary15LineIcon';

export default Dietary15LineIcon
