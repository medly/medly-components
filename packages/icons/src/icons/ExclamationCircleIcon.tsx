// tslint:disable:max-line-length
import { WithStyle } from '@medly-components/utils';
import React from 'react';
import ExclamationCircleSvg from '../assets/ExclamationCircle.svg';
import SvgIcon, { Props } from '../SvgIcon';

const ExclamationCircleIcon: React.FunctionComponent<Props> & WithStyle = props => (
    <SvgIcon {...props}>
        <ExclamationCircleSvg {...props} width="1em" height="1em" />
    </SvgIcon>
);

ExclamationCircleIcon.Style = SvgIcon;
ExclamationCircleIcon.displayName = 'ExclamationCircleIcon';
export default ExclamationCircleIcon;
