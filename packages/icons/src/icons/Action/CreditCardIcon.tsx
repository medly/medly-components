import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CreditCardIconSvg from '../../assets/Action/credit_card_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CreditCardIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <CreditCardIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

CreditCardIcon.Style = SvgIcon;
CreditCardIcon.displayName = 'CreditCardIcon';

export default CreditCardIcon
