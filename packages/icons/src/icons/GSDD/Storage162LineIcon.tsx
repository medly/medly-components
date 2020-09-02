import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Storage162LineIconSvg from '../../assets/GSDD/Storage_162_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Storage162LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Storage162LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Storage162LineIcon.Style = SvgIcon;
Storage162LineIcon.displayName = 'Storage162LineIcon';

export default Storage162LineIcon
