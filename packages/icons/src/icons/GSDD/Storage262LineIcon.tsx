import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Storage262LineIconSvg from '../../assets/GSDD/Storage_262_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Storage262LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Storage262LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Storage262LineIcon.Style = SvgIcon;
Storage262LineIcon.displayName = 'Storage262LineIcon';

export default Storage262LineIcon
