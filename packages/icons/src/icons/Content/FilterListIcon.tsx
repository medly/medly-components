import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import FilterListIconSvg from '../../assets/Content/filter_list_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FilterListIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FilterListIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FilterListIcon.Style = SvgIcon;
FilterListIcon.displayName = 'FilterListIcon';

export default FilterListIcon
