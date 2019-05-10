// tslint:disable:max-line-length
import { WithStyle } from '@medly-components/utils';
import React from 'react';
import ClearSvg from '../assets/Clear.svg';
import SvgIcon, { Props } from '../SvgIcon';

const ClearIcon: React.FunctionComponent<Props> & WithStyle = props => (
    <SvgIcon {...props}>
        <ClearSvg width="1em" height="1em" />
    </SvgIcon>
);

ClearIcon.Style = SvgIcon;
ClearIcon.displayName = 'ClearIcon';
export default ClearIcon;
