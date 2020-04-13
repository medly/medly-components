import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CutIconSvg from '../../assets/Content/cut_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CutIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CutIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CutIcon.Style = SvgIcon;
CutIcon.displayName = 'CutIcon';

export default CutIcon
