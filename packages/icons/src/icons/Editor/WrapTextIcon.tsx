import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import WrapTextIconSvg from '../../assets/Editor/wrap_text_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const WrapTextIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <WrapTextIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

WrapTextIcon.Style = SvgIcon;
WrapTextIcon.displayName = 'WrapTextIcon';

export default WrapTextIcon
