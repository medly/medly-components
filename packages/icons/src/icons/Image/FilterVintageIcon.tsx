import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FilterVintageIconSvg from '../../assets/Image/filter_vintage_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FilterVintageIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FilterVintageIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FilterVintageIcon.Style = SvgIcon;
FilterVintageIcon.displayName = 'FilterVintageIcon';

export default FilterVintageIcon
