import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import Filter1IconSvg from '../../assets/Image/filter_1_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Filter1Icon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Filter1IconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Filter1Icon.Style = SvgIcon;
Filter1Icon.displayName = 'Filter1Icon';

export default Filter1Icon
