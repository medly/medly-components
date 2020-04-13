import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FilterDramaIconSvg from '../../assets/Image/filter_drama_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FilterDramaIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FilterDramaIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FilterDramaIcon.Style = SvgIcon;
FilterDramaIcon.displayName = 'FilterDramaIcon';

export default FilterDramaIcon
