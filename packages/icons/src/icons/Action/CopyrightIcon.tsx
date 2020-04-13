import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CopyrightIconSvg from '../../assets/Action/copyright_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CopyrightIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CopyrightIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CopyrightIcon.Style = SvgIcon;
CopyrightIcon.displayName = 'CopyrightIcon';

export default CopyrightIcon
