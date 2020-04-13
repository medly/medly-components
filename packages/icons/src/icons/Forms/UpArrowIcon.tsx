import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import UpArrowIconSvg from '../../assets/Forms/UpArrow.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const UpArrowIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <UpArrowIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

UpArrowIcon.Style = SvgIcon;
UpArrowIcon.displayName = 'UpArrowIcon';

export default UpArrowIcon
