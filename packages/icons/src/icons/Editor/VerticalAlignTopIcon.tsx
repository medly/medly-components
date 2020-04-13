import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import VerticalAlignTopIconSvg from '../../assets/Editor/vertical_align_top_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const VerticalAlignTopIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <VerticalAlignTopIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

VerticalAlignTopIcon.Style = SvgIcon;
VerticalAlignTopIcon.displayName = 'VerticalAlignTopIcon';

export default VerticalAlignTopIcon
