import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Storage219LineIconSvg from '../../assets/GSDD/Storage_219_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Storage219LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Storage219LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Storage219LineIcon.Style = SvgIcon;
Storage219LineIcon.displayName = 'Storage219LineIcon';

export default Storage219LineIcon
