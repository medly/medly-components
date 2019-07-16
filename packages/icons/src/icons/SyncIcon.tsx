// tslint:disable:max-line-length
import { WithStyle } from '@medly-components/utils';
import React from 'react';
import SyncSvg from '../assets/Sync.svg';
import SvgIcon, { Props } from '../SvgIcon';

const SyncIcon: React.FunctionComponent<Props> & WithStyle = props => (
    <SvgIcon {...props}>
        <SyncSvg {...props} width="1em" height="1em" />
    </SvgIcon>
);

SyncIcon.Style = SvgIcon;
SyncIcon.displayName = 'SyncIcon';
export default SyncIcon;
