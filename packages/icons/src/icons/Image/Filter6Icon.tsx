import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Filter6IconSvg from '../../assets/Image/filter_6_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Filter6Icon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Filter6IconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Filter6Icon.Style = SvgIcon;
Filter6Icon.displayName = 'Filter6Icon';

export default Filter6Icon
