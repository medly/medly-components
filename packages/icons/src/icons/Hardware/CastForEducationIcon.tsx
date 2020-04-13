import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CastForEducationIconSvg from '../../assets/Hardware/cast_for_education_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CastForEducationIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <CastForEducationIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

CastForEducationIcon.Style = SvgIcon;
CastForEducationIcon.displayName = 'CastForEducationIcon';

export default CastForEducationIcon
