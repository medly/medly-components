import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FirstPageIconSvg from '../../assets/Navigation/first_page_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FirstPageIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FirstPageIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FirstPageIcon.Style = SvgIcon;
FirstPageIcon.displayName = 'FirstPageIcon';

export default FirstPageIcon
