import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Storage320LineIconSvg from '../../assets/GSDD/Storage_320_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Storage320LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Storage320LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Storage320LineIcon.Style = SvgIcon;
Storage320LineIcon.displayName = 'Storage320LineIcon';

export default Storage320LineIcon
