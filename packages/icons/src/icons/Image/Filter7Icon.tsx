import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import Filter7IconSvg from '../../assets/Image/filter_7_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Filter7Icon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <Filter7IconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

Filter7Icon.Style = SvgIcon;
Filter7Icon.displayName = 'Filter7Icon';

export default Filter7Icon
