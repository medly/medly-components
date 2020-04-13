import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FilterBAndWIconSvg from '../../assets/Image/filter_b_and_w_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FilterBAndWIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FilterBAndWIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FilterBAndWIcon.Style = SvgIcon;
FilterBAndWIcon.displayName = 'FilterBAndWIcon';

export default FilterBAndWIcon
