import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ContractIconSvg from '../../assets/Forms/Contract.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ContractIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ContractIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ContractIcon.Style = SvgIcon;
ContractIcon.displayName = 'ContractIcon';

export default ContractIcon
