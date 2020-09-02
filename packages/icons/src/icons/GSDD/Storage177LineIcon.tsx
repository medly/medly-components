import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Storage177LineIconSvg from '../../assets/GSDD/Storage_177_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Storage177LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Storage177LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Storage177LineIcon.Style = SvgIcon;
Storage177LineIcon.displayName = 'Storage177LineIcon';

export default Storage177LineIcon
