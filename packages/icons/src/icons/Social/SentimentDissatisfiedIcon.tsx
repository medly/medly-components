import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SentimentDissatisfiedIconSvg from '../../assets/Social/sentiment_dissatisfied_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SentimentDissatisfiedIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SentimentDissatisfiedIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SentimentDissatisfiedIcon.Style = SvgIcon;
SentimentDissatisfiedIcon.displayName = 'SentimentDissatisfiedIcon';

export default SentimentDissatisfiedIcon
