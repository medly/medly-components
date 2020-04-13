import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DvrIconSvg from '../../assets/Device/dvr_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DvrIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <DvrIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

DvrIcon.Style = SvgIcon;
DvrIcon.displayName = 'DvrIcon';

export default DvrIcon
