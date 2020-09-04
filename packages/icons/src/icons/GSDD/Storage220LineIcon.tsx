import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Storage220LineIconSvg from '../../assets/GSDD/Storage_220_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Storage220LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Storage220LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Storage220LineIcon.Style = SvgIcon;
Storage220LineIcon.displayName = 'Storage220LineIcon';

export default Storage220LineIcon
