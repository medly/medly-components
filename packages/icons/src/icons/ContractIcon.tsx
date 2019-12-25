import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ContractSvg from '../assets/Contract.svg';
import SvgIcon, { Props } from '../SvgIcon';

export const ContractIcon: SFC<Props> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ContractSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ContractIcon.Style = SvgIcon;
ContractIcon.displayName = 'ContractIcon';
