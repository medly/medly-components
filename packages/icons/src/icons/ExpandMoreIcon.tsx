// tslint:disable:max-line-length
import { WithStyle } from '@medly-components/utils';
import React from 'react';
import ExpandMoreSvg from '../assets/ExpandMore.svg';
import SvgIcon, { Props } from '../SvgIcon';

const ExpandMoreIcon: React.FunctionComponent<Props> & WithStyle = ({ size, color, ...props }) => (
    <SvgIcon size={size} color={color} {...props}>
        <ExpandMoreSvg width="1em" height="1em" />
    </SvgIcon>
);

ExpandMoreIcon.Style = SvgIcon;
ExpandMoreIcon.displayName = 'ExpandMoreIcon';
export default ExpandMoreIcon;
