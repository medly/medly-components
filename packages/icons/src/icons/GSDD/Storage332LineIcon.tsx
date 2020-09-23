import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Storage332LineIconSvg from '../../assets/GSDD/Storage_332_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Storage332LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Storage332LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Storage332LineIcon.Style = SvgIcon;
Storage332LineIcon.displayName = 'Storage332LineIcon';

export default Storage332LineIcon
