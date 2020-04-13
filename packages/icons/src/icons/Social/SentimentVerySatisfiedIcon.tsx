import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SentimentVerySatisfiedIconSvg from '../../assets/Social/sentiment_very_satisfied_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SentimentVerySatisfiedIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SentimentVerySatisfiedIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SentimentVerySatisfiedIcon.Style = SvgIcon;
SentimentVerySatisfiedIcon.displayName = 'SentimentVerySatisfiedIcon';

export default SentimentVerySatisfiedIcon
