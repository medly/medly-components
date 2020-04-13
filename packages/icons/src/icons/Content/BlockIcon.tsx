import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BlockIconSvg from '../../assets/Content/block_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BlockIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <BlockIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

BlockIcon.Style = SvgIcon;
BlockIcon.displayName = 'BlockIcon';

export default BlockIcon
