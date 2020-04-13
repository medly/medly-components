import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import TranslateIconSvg from '../../assets/Action/translate_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TranslateIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <TranslateIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

TranslateIcon.Style = SvgIcon;
TranslateIcon.displayName = 'TranslateIcon';

export default TranslateIcon
