import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PagesIconSvg from '../../assets/Social/pages_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PagesIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PagesIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PagesIcon.Style = SvgIcon;
PagesIcon.displayName = 'PagesIcon';

export default PagesIcon
