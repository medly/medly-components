import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Storage126LineIconSvg from '../../assets/GSDD/Storage_126_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Storage126LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Storage126LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Storage126LineIcon.Style = SvgIcon;
Storage126LineIcon.displayName = 'Storage126LineIcon';

export default Storage126LineIcon
