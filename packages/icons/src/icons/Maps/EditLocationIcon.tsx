import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import EditLocationIconSvg from '../../assets/Maps/edit_location_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const EditLocationIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <EditLocationIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

EditLocationIcon.Style = SvgIcon;
EditLocationIcon.displayName = 'EditLocationIcon';

export default EditLocationIcon
