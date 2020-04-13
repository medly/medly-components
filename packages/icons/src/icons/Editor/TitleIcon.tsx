import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import TitleIconSvg from '../../assets/Editor/title_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TitleIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <TitleIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

TitleIcon.Style = SvgIcon;
TitleIcon.displayName = 'TitleIcon';

export default TitleIcon
