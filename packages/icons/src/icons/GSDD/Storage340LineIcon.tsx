import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Storage340LineIconSvg from '../../assets/GSDD/Storage_340_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Storage340LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Storage340LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Storage340LineIcon.Style = SvgIcon;
Storage340LineIcon.displayName = 'Storage340LineIcon';

export default Storage340LineIcon
