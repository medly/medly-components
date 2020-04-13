import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FilterBAndWIconSvg from '../../assets/Image/filter_b_and_w_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FilterBAndWIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FilterBAndWIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FilterBAndWIcon.Style = SvgIcon;
FilterBAndWIcon.displayName = 'FilterBAndWIcon';

export default FilterBAndWIcon
