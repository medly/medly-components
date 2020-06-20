import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SentimentSatisfiedIconSvg from '../../assets/Social/sentiment_satisfied_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SentimentSatisfiedIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SentimentSatisfiedIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SentimentSatisfiedIcon.Style = SvgIcon;
SentimentSatisfiedIcon.displayName = 'SentimentSatisfiedIcon';

export default SentimentSatisfiedIcon
