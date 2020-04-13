import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PausePresentationIconSvg from '../../assets/Communication/pause_presentation_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PausePresentationIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PausePresentationIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PausePresentationIcon.Style = SvgIcon;
PausePresentationIcon.displayName = 'PausePresentationIcon';

export default PausePresentationIcon
