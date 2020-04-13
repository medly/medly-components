import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SaveIconSvg from '../../assets/Content/save_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SaveIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SaveIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SaveIcon.Style = SvgIcon;
SaveIcon.displayName = 'SaveIcon';

export default SaveIcon
