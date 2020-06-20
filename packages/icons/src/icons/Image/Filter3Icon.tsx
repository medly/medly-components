import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Filter3IconSvg from '../../assets/Image/filter_3_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Filter3Icon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Filter3IconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Filter3Icon.Style = SvgIcon;
Filter3Icon.displayName = 'Filter3Icon';

export default Filter3Icon
