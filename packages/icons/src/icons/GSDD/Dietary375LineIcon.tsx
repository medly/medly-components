import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary375LineIconSvg from '../../assets/GSDD/Dietary_375_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary375LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary375LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary375LineIcon.Style = SvgIcon;
Dietary375LineIcon.displayName = 'Dietary375LineIcon';

export default Dietary375LineIcon
