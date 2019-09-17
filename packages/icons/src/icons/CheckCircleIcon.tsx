// tslint:disable:max-line-length
import { WithStyle } from '@medly-components/utils';
import React from 'react';
import CheckCircleSvg from '../assets/CheckCircle.svg';
import SvgIcon, { Props } from '../SvgIcon';

const CheckCircleIcon: React.FunctionComponent<Props> & WithStyle = props => (
    <SvgIcon {...props}>
        <CheckCircleSvg {...props} width="1em" height="1em" />
    </SvgIcon>
);

CheckCircleIcon.Style = SvgIcon;
CheckCircleIcon.displayName = 'CheckCircleIcon';
export default CheckCircleIcon;
