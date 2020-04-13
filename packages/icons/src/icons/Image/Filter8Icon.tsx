import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import Filter8IconSvg from '../../assets/Image/filter_8_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Filter8Icon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <Filter8IconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

Filter8Icon.Style = SvgIcon;
Filter8Icon.displayName = 'Filter8Icon';

export default Filter8Icon
