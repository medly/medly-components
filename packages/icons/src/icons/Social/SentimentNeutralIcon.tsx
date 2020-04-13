import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SentimentNeutralIconSvg from '../../assets/Social/sentiment_neutral_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SentimentNeutralIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SentimentNeutralIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SentimentNeutralIcon.Style = SvgIcon;
SentimentNeutralIcon.displayName = 'SentimentNeutralIcon';

export default SentimentNeutralIcon
