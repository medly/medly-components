import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import Filter6IconSvg from '../../assets/Image/filter_6_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Filter6Icon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <Filter6IconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

Filter6Icon.Style = SvgIcon;
Filter6Icon.displayName = 'Filter6Icon';

export default Filter6Icon
