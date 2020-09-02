import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Storage343LineIconSvg from '../../assets/GSDD/Storage_343_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Storage343LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Storage343LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Storage343LineIcon.Style = SvgIcon;
Storage343LineIcon.displayName = 'Storage343LineIcon';

export default Storage343LineIcon
