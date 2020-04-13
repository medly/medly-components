import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import HowToVoteIconSvg from '../../assets/Content/how_to_vote_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const HowToVoteIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <HowToVoteIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

HowToVoteIcon.Style = SvgIcon;
HowToVoteIcon.displayName = 'HowToVoteIcon';

export default HowToVoteIcon
