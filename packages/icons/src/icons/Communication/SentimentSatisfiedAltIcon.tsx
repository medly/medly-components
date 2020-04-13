import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SentimentSatisfiedAltIconSvg from '../../assets/Communication/sentiment_satisfied_alt_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SentimentSatisfiedAltIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SentimentSatisfiedAltIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SentimentSatisfiedAltIcon.Style = SvgIcon;
SentimentSatisfiedAltIcon.displayName = 'SentimentSatisfiedAltIcon';

export default SentimentSatisfiedAltIcon
