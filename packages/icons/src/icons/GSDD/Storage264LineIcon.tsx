import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Storage264LineIconSvg from '../../assets/GSDD/Storage_264_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Storage264LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Storage264LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Storage264LineIcon.Style = SvgIcon;
Storage264LineIcon.displayName = 'Storage264LineIcon';

export default Storage264LineIcon
