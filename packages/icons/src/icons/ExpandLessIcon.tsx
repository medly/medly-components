// tslint:disable:max-line-length
import { WithStyle } from '@medly-components/utils';
import React from 'react';
import ExpandLessSvg from '../assets/ExpandLess.svg';
import SvgIcon, { Props } from '../SvgIcon';

const ExpandLessIcon: React.FunctionComponent<Props> & WithStyle = ({ size, color, ...props }) => (
    <SvgIcon size={size} color={color} {...props}>
        <ExpandLessSvg width="1em" height="1em" />
    </SvgIcon>
);

ExpandLessIcon.Style = SvgIcon;
ExpandLessIcon.displayName = 'ExpandLessIcon';
export default ExpandLessIcon;
