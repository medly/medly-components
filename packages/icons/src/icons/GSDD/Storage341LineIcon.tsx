import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Storage341LineIconSvg from '../../assets/GSDD/Storage_341_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Storage341LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Storage341LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Storage341LineIcon.Style = SvgIcon;
Storage341LineIcon.displayName = 'Storage341LineIcon';

export default Storage341LineIcon
