import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SortByAlphaIconSvg from '../../assets/Media/sort_by_alpha_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SortByAlphaIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SortByAlphaIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SortByAlphaIcon.Style = SvgIcon;
SortByAlphaIcon.displayName = 'SortByAlphaIcon';

export default SortByAlphaIcon
