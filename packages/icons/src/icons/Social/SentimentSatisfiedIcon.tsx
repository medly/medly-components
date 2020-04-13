import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SentimentSatisfiedIconSvg from '../../assets/Social/sentiment_satisfied_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SentimentSatisfiedIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SentimentSatisfiedIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SentimentSatisfiedIcon.Style = SvgIcon;
SentimentSatisfiedIcon.displayName = 'SentimentSatisfiedIcon';

export default SentimentSatisfiedIcon
