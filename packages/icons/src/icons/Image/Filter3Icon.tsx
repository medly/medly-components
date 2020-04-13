import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import Filter3IconSvg from '../../assets/Image/filter_3_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Filter3Icon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <Filter3IconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

Filter3Icon.Style = SvgIcon;
Filter3Icon.displayName = 'Filter3Icon';

export default Filter3Icon
