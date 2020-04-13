import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FilterHdrIconSvg from '../../assets/Image/filter_hdr_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FilterHdrIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FilterHdrIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FilterHdrIcon.Style = SvgIcon;
FilterHdrIcon.displayName = 'FilterHdrIcon';

export default FilterHdrIcon
