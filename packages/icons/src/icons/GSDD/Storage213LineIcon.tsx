import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Storage213LineIconSvg from '../../assets/GSDD/Storage_213_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Storage213LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Storage213LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Storage213LineIcon.Style = SvgIcon;
Storage213LineIcon.displayName = 'Storage213LineIcon';

export default Storage213LineIcon
