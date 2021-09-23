import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SentimentSatisfiedAltIconSvg from '../../assets/Communication/sentiment_satisfied_alt_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SentimentSatisfiedAltIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'SentimentSatisfiedAltIcon';

const SentimentSatisfiedAltIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon })

export default SentimentSatisfiedAltIcon
