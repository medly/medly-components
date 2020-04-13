import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FilterIconSvg from '../../assets/Image/filter_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FilterIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FilterIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FilterIcon.Style = SvgIcon;
FilterIcon.displayName = 'FilterIcon';

export default FilterIcon
