import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FilterTiltShiftIconSvg from '../../assets/Image/filter_tilt_shift_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FilterTiltShiftIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FilterTiltShiftIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FilterTiltShiftIcon.Style = SvgIcon;
FilterTiltShiftIcon.displayName = 'FilterTiltShiftIcon';

export default FilterTiltShiftIcon
