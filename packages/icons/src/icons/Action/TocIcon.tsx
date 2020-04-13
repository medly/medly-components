import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import TocIconSvg from '../../assets/Action/toc_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TocIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <TocIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

TocIcon.Style = SvgIcon;
TocIcon.displayName = 'TocIcon';

export default TocIcon
