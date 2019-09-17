// tslint:disable:max-line-length
import { WithStyle } from '@medly-components/utils';
import React from 'react';
import BugSvg from '../assets/Bug.svg';
import SvgIcon, { Props } from '../SvgIcon';

const BugIcon: React.FunctionComponent<Props> & WithStyle = props => (
    <SvgIcon {...props}>
        <BugSvg {...props} width="1em" height="1em" />
    </SvgIcon>
);

BugIcon.Style = SvgIcon;
BugIcon.displayName = 'BugIcon';
export default BugIcon;
