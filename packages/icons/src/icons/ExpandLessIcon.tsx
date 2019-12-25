import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ExpandLessSvg from '../assets/ExpandLess.svg';
import SvgIcon, { Props } from '../SvgIcon';

export const ExpandLessIcon: SFC<Props> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ExpandLessSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ExpandLessIcon.Style = SvgIcon;
ExpandLessIcon.displayName = 'ExpandLessIcon';
