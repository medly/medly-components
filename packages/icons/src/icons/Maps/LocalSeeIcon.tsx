import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LocalSeeIconSvg from '../../assets/Maps/local_see_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LocalSeeIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <LocalSeeIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

LocalSeeIcon.Style = SvgIcon;
LocalSeeIcon.displayName = 'LocalSeeIcon';

export default LocalSeeIcon
