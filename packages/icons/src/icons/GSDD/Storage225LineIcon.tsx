import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Storage225LineIconSvg from '../../assets/GSDD/Storage_225_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Storage225LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Storage225LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Storage225LineIcon.Style = SvgIcon;
Storage225LineIcon.displayName = 'Storage225LineIcon';

export default Storage225LineIcon
