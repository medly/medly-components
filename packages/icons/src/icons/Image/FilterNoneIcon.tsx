import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FilterNoneIconSvg from '../../assets/Image/filter_none_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FilterNoneIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FilterNoneIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FilterNoneIcon.Style = SvgIcon;
FilterNoneIcon.displayName = 'FilterNoneIcon';

export default FilterNoneIcon
