import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Storage406LineIconSvg from '../../assets/GSDD/Storage_406_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Storage406LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Storage406LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Storage406LineIcon.Style = SvgIcon;
Storage406LineIcon.displayName = 'Storage406LineIcon';

export default Storage406LineIcon
