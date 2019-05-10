// tslint:disable:max-line-length
import { WithStyle } from '@medly-components/utils';
import React from 'react';
import ExpandMoreSvg from '../assets/ExpandMore.svg';
import SvgIcon, { Props } from '../SvgIcon';

const ExpandMoreIcon: React.FunctionComponent<Props> & WithStyle = props => (
    <SvgIcon {...props}>
        <ExpandMoreSvg width="1em" height="1em" />
    </SvgIcon>
);

ExpandMoreIcon.Style = SvgIcon;
ExpandMoreIcon.displayName = 'ExpandMoreIcon';
export default ExpandMoreIcon;
