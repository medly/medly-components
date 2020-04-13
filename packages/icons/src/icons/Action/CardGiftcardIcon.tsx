import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CardGiftcardIconSvg from '../../assets/Action/card_giftcard_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CardGiftcardIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <CardGiftcardIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

CardGiftcardIcon.Style = SvgIcon;
CardGiftcardIcon.displayName = 'CardGiftcardIcon';

export default CardGiftcardIcon
