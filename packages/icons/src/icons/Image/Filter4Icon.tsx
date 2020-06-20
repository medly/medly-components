import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Filter4IconSvg from '../../assets/Image/filter_4_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Filter4Icon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Filter4IconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Filter4Icon.Style = SvgIcon;
Filter4Icon.displayName = 'Filter4Icon';

export default Filter4Icon
