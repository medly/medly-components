import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Storage226LineIconSvg from '../../assets/GSDD/Storage_226_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Storage226LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Storage226LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Storage226LineIcon.Style = SvgIcon;
Storage226LineIcon.displayName = 'Storage226LineIcon';

export default Storage226LineIcon
