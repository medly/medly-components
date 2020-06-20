import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SaveAltIconSvg from '../../assets/Content/save_alt_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SaveAltIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SaveAltIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SaveAltIcon.Style = SvgIcon;
SaveAltIcon.displayName = 'SaveAltIcon';

export default SaveAltIcon
