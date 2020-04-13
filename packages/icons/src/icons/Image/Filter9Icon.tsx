import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import Filter9IconSvg from '../../assets/Image/filter_9_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Filter9Icon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <Filter9IconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

Filter9Icon.Style = SvgIcon;
Filter9Icon.displayName = 'Filter9Icon';

export default Filter9Icon
