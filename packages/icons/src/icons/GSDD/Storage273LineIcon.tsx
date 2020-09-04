import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Storage273LineIconSvg from '../../assets/GSDD/Storage_273_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Storage273LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Storage273LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Storage273LineIcon.Style = SvgIcon;
Storage273LineIcon.displayName = 'Storage273LineIcon';

export default Storage273LineIcon
