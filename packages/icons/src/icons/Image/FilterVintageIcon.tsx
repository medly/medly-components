import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import FilterVintageIconSvg from '../../assets/Image/filter_vintage_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FilterVintageIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FilterVintageIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FilterVintageIcon.Style = SvgIcon;
FilterVintageIcon.displayName = 'FilterVintageIcon';

export default FilterVintageIcon
