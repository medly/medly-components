import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CodeIconSvg from '../../assets/Action/code_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CodeIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <CodeIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

CodeIcon.Style = SvgIcon;
CodeIcon.displayName = 'CodeIcon';

export default CodeIcon
