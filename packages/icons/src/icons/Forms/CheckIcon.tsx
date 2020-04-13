import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CheckIconSvg from '../../assets/Forms/Check.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CheckIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <CheckIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

CheckIcon.Style = SvgIcon;
CheckIcon.displayName = 'CheckIcon';

export default CheckIcon
