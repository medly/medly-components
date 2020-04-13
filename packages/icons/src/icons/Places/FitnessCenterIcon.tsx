import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FitnessCenterIconSvg from '../../assets/Places/fitness_center_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FitnessCenterIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FitnessCenterIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FitnessCenterIcon.Style = SvgIcon;
FitnessCenterIcon.displayName = 'FitnessCenterIcon';

export default FitnessCenterIcon
