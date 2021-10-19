import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import FilterCenterFocusIconSvg from '../../assets/Image/filter_center_focus_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FilterCenterFocusIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'FilterCenterFocusIcon';

const FilterCenterFocusIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default FilterCenterFocusIcon;
