import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PasteIconSvg from '../../assets/Content/paste_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PasteIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PasteIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PasteIcon.Style = SvgIcon;
PasteIcon.displayName = 'PasteIcon';

export default PasteIcon
