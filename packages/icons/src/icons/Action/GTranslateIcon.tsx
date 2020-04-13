import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import GTranslateIconSvg from '../../assets/Action/g_translate_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const GTranslateIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <GTranslateIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

GTranslateIcon.Style = SvgIcon;
GTranslateIcon.displayName = 'GTranslateIcon';

export default GTranslateIcon
