import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SentimentVeryDissatisfiedIconSvg from '../../assets/Social/sentiment_very_dissatisfied_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SentimentVeryDissatisfiedIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SentimentVeryDissatisfiedIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SentimentVeryDissatisfiedIcon.Style = SvgIcon;
SentimentVeryDissatisfiedIcon.displayName = 'SentimentVeryDissatisfiedIcon';

export default SentimentVeryDissatisfiedIcon
