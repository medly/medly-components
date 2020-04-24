import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CheckMaterialIconSvg from '../../assets/Navigation/check_material_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CheckMaterialIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CheckMaterialIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CheckMaterialIcon.Style = SvgIcon;
CheckMaterialIcon.displayName = 'CheckMaterialIcon';

export default CheckMaterialIcon
