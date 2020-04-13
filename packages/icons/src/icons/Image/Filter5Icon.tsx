import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import Filter5IconSvg from '../../assets/Image/filter_5_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Filter5Icon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Filter5IconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Filter5Icon.Style = SvgIcon;
Filter5Icon.displayName = 'Filter5Icon';

export default Filter5Icon
