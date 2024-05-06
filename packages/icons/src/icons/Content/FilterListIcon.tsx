import { WithStyle } from '@medly-components/utils';
import type { FCC } from 'react';
import { memo } from 'react';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';
import FilterListIconSvg from '../../assets/Content/filter_list_24px_rounded.svg';

const Component: FCC<SvgIconProps> = memo(props => {
    const { size, variant, iconColor, bgColor, hoverBgColor, hoverIconColor, withHoverEffect, margin, fillOpacity, ...restProps } = props;
    return (
        <SvgIcon
            {...{ size, variant, iconColor, bgColor, hoverBgColor, hoverIconColor, withHoverEffect, margin, fillOpacity, ...restProps }}
        >
            <FilterListIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'FilterListIcon';

const FilterListIcon: FCC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default FilterListIcon;
