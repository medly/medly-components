import { WithStyle } from '@medly-components/utils';
import { memo, FC } from 'react';
import CardGiftcardIconSvg from '../../assets/Action/card_giftcard_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CardGiftcardIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'CardGiftcardIcon';

const CardGiftcardIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default CardGiftcardIcon;
