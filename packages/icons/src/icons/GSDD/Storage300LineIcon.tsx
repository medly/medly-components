import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Storage300LineIconSvg from '../../assets/GSDD/Storage_300_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Storage300LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Storage300LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Storage300LineIcon.Style = SvgIcon;
Storage300LineIcon.displayName = 'Storage300LineIcon';

export default Storage300LineIcon
