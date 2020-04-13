import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import Filter1IconSvg from '../../assets/Image/filter_1_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Filter1Icon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <Filter1IconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

Filter1Icon.Style = SvgIcon;
Filter1Icon.displayName = 'Filter1Icon';

export default Filter1Icon
