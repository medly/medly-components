import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Storage178LineIconSvg from '../../assets/GSDD/Storage_178_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Storage178LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Storage178LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Storage178LineIcon.Style = SvgIcon;
Storage178LineIcon.displayName = 'Storage178LineIcon';

export default Storage178LineIcon
