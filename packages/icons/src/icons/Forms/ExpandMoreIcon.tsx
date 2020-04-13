import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ExpandMoreIconSvg from '../../assets/Forms/ExpandMore.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ExpandMoreIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ExpandMoreIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ExpandMoreIcon.Style = SvgIcon;
ExpandMoreIcon.displayName = 'ExpandMoreIcon';

export default ExpandMoreIcon
