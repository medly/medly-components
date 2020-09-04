import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Storage309LineIconSvg from '../../assets/GSDD/Storage_309_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Storage309LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Storage309LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Storage309LineIcon.Style = SvgIcon;
Storage309LineIcon.displayName = 'Storage309LineIcon';

export default Storage309LineIcon
