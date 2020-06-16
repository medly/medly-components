import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import CodeIconSvg from '../../assets/Action/code_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CodeIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CodeIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CodeIcon.Style = SvgIcon;
CodeIcon.displayName = 'CodeIcon';

export default CodeIcon
