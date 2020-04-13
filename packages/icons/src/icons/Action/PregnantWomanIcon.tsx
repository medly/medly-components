import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PregnantWomanIconSvg from '../../assets/Action/pregnant_woman_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PregnantWomanIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PregnantWomanIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PregnantWomanIcon.Style = SvgIcon;
PregnantWomanIcon.displayName = 'PregnantWomanIcon';

export default PregnantWomanIcon
