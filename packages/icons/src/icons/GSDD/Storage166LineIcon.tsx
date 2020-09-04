import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Storage166LineIconSvg from '../../assets/GSDD/Storage_166_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Storage166LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Storage166LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Storage166LineIcon.Style = SvgIcon;
Storage166LineIcon.displayName = 'Storage166LineIcon';

export default Storage166LineIcon
