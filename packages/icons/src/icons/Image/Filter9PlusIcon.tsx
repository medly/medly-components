import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import Filter9PlusIconSvg from '../../assets/Image/filter_9_plus_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Filter9PlusIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Filter9PlusIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Filter9PlusIcon.Style = SvgIcon;
Filter9PlusIcon.displayName = 'Filter9PlusIcon';

export default Filter9PlusIcon
