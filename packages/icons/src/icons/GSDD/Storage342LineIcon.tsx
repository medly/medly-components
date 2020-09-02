import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Storage342LineIconSvg from '../../assets/GSDD/Storage_342_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Storage342LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Storage342LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Storage342LineIcon.Style = SvgIcon;
Storage342LineIcon.displayName = 'Storage342LineIcon';

export default Storage342LineIcon
