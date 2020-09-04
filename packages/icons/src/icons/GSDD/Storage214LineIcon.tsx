import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Storage214LineIconSvg from '../../assets/GSDD/Storage_214_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Storage214LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Storage214LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Storage214LineIcon.Style = SvgIcon;
Storage214LineIcon.displayName = 'Storage214LineIcon';

export default Storage214LineIcon
