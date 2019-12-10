// tslint:disable:max-line-length
import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PowerButtonSvg from '../assets/PowerButton.svg';
import SvgIcon, { Props } from '../SvgIcon';

export const PowerButtonIcon: SFC<Props> & WithStyle = props => (
    <SvgIcon {...props}>
        <PowerButtonSvg {...props} width="1em" height="1em" />
    </SvgIcon>
);

PowerButtonIcon.Style = SvgIcon;
PowerButtonIcon.displayName = 'PowerButtonIcon';
