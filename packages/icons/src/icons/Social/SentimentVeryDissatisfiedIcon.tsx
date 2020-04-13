import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SentimentVeryDissatisfiedIconSvg from '../../assets/Social/sentiment_very_dissatisfied_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SentimentVeryDissatisfiedIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SentimentVeryDissatisfiedIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SentimentVeryDissatisfiedIcon.Style = SvgIcon;
SentimentVeryDissatisfiedIcon.displayName = 'SentimentVeryDissatisfiedIcon';

export default SentimentVeryDissatisfiedIcon
