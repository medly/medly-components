import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import FilterNoneIconSvg from '../../assets/Image/filter_none_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FilterNoneIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FilterNoneIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FilterNoneIcon.Style = SvgIcon;
FilterNoneIcon.displayName = 'FilterNoneIcon';

export default FilterNoneIcon
