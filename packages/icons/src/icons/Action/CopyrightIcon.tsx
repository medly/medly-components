import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CopyrightIconSvg from '../../assets/Action/copyright_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CopyrightIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <CopyrightIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

CopyrightIcon.Style = SvgIcon;
CopyrightIcon.displayName = 'CopyrightIcon';

export default CopyrightIcon
