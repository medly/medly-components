import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import InsertEmoticonIconSvg from '../../assets/Editor/insert_emoticon_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <InsertEmoticonIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'InsertEmoticonIcon';

const InsertEmoticonIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon })

export default InsertEmoticonIcon
