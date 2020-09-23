import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Storage276LineIconSvg from '../../assets/GSDD/Storage_276_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Storage276LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Storage276LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Storage276LineIcon.Style = SvgIcon;
Storage276LineIcon.displayName = 'Storage276LineIcon';

export default Storage276LineIcon
