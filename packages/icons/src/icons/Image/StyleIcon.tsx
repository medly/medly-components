import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import StyleIconSvg from '../../assets/Image/style_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const StyleIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <StyleIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

StyleIcon.Style = SvgIcon;
StyleIcon.displayName = 'StyleIcon';

export default StyleIcon
