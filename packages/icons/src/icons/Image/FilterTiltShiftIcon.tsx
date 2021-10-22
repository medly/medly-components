import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import FilterTiltShiftIconSvg from '../../assets/Image/filter_tilt_shift_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FilterTiltShiftIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'FilterTiltShiftIcon';

const FilterTiltShiftIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default FilterTiltShiftIcon;
