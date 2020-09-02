import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Storage339LineIconSvg from '../../assets/GSDD/Storage_339_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Storage339LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Storage339LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Storage339LineIcon.Style = SvgIcon;
Storage339LineIcon.displayName = 'Storage339LineIcon';

export default Storage339LineIcon
