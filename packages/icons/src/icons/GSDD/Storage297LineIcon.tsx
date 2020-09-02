import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Storage297LineIconSvg from '../../assets/GSDD/Storage_297_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Storage297LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Storage297LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Storage297LineIcon.Style = SvgIcon;
Storage297LineIcon.displayName = 'Storage297LineIcon';

export default Storage297LineIcon
