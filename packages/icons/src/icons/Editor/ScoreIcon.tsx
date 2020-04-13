import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ScoreIconSvg from '../../assets/Editor/score_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ScoreIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ScoreIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ScoreIcon.Style = SvgIcon;
ScoreIcon.displayName = 'ScoreIcon';

export default ScoreIcon
