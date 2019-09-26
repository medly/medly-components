// tslint:disable:max-line-length
import { WithStyle } from '@medly-components/utils';
import React from 'react';
import ContractSvg from '../assets/Contract.svg';
import SvgIcon, { Props } from '../SvgIcon';

const ContractIcon: React.FunctionComponent<Props> & WithStyle = props => (
    <SvgIcon {...props}>
        <ContractSvg {...props} width="1em" height="1em" />
    </SvgIcon>
);

ContractIcon.Style = SvgIcon;
ContractIcon.displayName = 'ContractIcon';
export default ContractIcon;
