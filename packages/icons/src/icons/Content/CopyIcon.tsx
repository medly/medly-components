import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import CopyIconSvg from '../../assets/Content/copy_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CopyIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CopyIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CopyIcon.Style = SvgIcon;
CopyIcon.displayName = 'CopyIcon';

export default CopyIcon
