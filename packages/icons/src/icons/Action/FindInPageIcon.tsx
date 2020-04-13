import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FindInPageIconSvg from '../../assets/Action/find_in_page_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FindInPageIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FindInPageIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FindInPageIcon.Style = SvgIcon;
FindInPageIcon.displayName = 'FindInPageIcon';

export default FindInPageIcon
