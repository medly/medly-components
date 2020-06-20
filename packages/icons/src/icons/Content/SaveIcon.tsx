import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SaveIconSvg from '../../assets/Content/save_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SaveIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SaveIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SaveIcon.Style = SvgIcon;
SaveIcon.displayName = 'SaveIcon';

export default SaveIcon
