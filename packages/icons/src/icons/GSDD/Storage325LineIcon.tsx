import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Storage325LineIconSvg from '../../assets/GSDD/Storage_325_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Storage325LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Storage325LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Storage325LineIcon.Style = SvgIcon;
Storage325LineIcon.displayName = 'Storage325LineIcon';

export default Storage325LineIcon
