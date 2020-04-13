import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import Filter4IconSvg from '../../assets/Image/filter_4_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Filter4Icon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <Filter4IconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

Filter4Icon.Style = SvgIcon;
Filter4Icon.displayName = 'Filter4Icon';

export default Filter4Icon
