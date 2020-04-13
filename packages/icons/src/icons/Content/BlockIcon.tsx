import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BlockIconSvg from '../../assets/Content/block_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BlockIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <BlockIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

BlockIcon.Style = SvgIcon;
BlockIcon.displayName = 'BlockIcon';

export default BlockIcon
