import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Storage282LineIconSvg from '../../assets/GSDD/Storage_282_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Storage282LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Storage282LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Storage282LineIcon.Style = SvgIcon;
Storage282LineIcon.displayName = 'Storage282LineIcon';

export default Storage282LineIcon
