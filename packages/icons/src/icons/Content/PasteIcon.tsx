import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import PasteIconSvg from '../../assets/Content/paste_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PasteIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PasteIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PasteIcon.Style = SvgIcon;
PasteIcon.displayName = 'PasteIcon';

export default PasteIcon
