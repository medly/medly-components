import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FilterIconSvg from '../../assets/Image/filter_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FilterIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FilterIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FilterIcon.Style = SvgIcon;
FilterIcon.displayName = 'FilterIcon';

export default FilterIcon
