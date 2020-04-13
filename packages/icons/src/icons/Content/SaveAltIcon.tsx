import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SaveAltIconSvg from '../../assets/Content/save_alt_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SaveAltIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SaveAltIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SaveAltIcon.Style = SvgIcon;
SaveAltIcon.displayName = 'SaveAltIcon';

export default SaveAltIcon
