import { WithStyle } from '@medly-components/utils';
import { memo, FC } from 'react';
import SentimentVerySatisfiedIconSvg from '../../assets/Social/sentiment_very_satisfied_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SentimentVerySatisfiedIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'SentimentVerySatisfiedIcon';

const SentimentVerySatisfiedIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default SentimentVerySatisfiedIcon;
