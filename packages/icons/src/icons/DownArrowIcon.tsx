// tslint:disable:max-line-length
import { WithStyle } from '@medly-components/utils';
import React from 'react';
import DownArrowSvg from '../assets/DownArrow.svg';
import SvgIcon, { Props } from '../SvgIcon';

const DownArrowIcon: React.FunctionComponent<Props> & WithStyle = props => (
    <SvgIcon {...props}>
        <DownArrowSvg width="1em" height="1em" />
    </SvgIcon>
);

DownArrowIcon.Style = SvgIcon;
DownArrowIcon.displayName = 'DownArrowIcon';
export default DownArrowIcon;
