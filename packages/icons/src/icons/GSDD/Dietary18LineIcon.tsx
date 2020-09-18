import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary18LineIconSvg from '../../assets/GSDD/Dietary_18_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary18LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary18LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary18LineIcon.Style = SvgIcon;
Dietary18LineIcon.displayName = 'Dietary18LineIcon';

export default Dietary18LineIcon
