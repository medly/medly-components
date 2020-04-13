import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FilterListIconSvg from '../../assets/Content/filter_list_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FilterListIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FilterListIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FilterListIcon.Style = SvgIcon;
FilterListIcon.displayName = 'FilterListIcon';

export default FilterListIcon
