import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SentimentSatisfiedAltIconSvg from '../../assets/Communication/sentiment_satisfied_alt_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SentimentSatisfiedAltIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SentimentSatisfiedAltIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SentimentSatisfiedAltIcon.Style = SvgIcon;
SentimentSatisfiedAltIcon.displayName = 'SentimentSatisfiedAltIcon';

export default SentimentSatisfiedAltIcon
