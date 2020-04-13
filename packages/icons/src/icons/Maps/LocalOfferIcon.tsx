import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LocalOfferIconSvg from '../../assets/Maps/local_offer_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LocalOfferIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <LocalOfferIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

LocalOfferIcon.Style = SvgIcon;
LocalOfferIcon.displayName = 'LocalOfferIcon';

export default LocalOfferIcon
