import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Storage331LineIconSvg from '../../assets/GSDD/Storage_331_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Storage331LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Storage331LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Storage331LineIcon.Style = SvgIcon;
Storage331LineIcon.displayName = 'Storage331LineIcon';

export default Storage331LineIcon
