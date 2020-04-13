import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LanguageIconSvg from '../../assets/Action/language_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LanguageIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <LanguageIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

LanguageIcon.Style = SvgIcon;
LanguageIcon.displayName = 'LanguageIcon';

export default LanguageIcon
