// tslint:disable:max-line-length
import { WithStyle } from '@medly-components/utils';
import React from 'react';
import CheckSvg from '../assets/Check.svg';
import SvgIcon, { Props } from '../SvgIcon';

const CheckIcon: React.FunctionComponent<Props> & WithStyle = props => (
    <SvgIcon {...props}>
        <CheckSvg {...props} width="1em" height="1em" />
    </SvgIcon>
);

CheckIcon.Style = SvgIcon;
CheckIcon.displayName = 'CheckIcon';
export default CheckIcon;
