import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AddLocationIconSvg from '../../assets/Maps/add_location_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AddLocationIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AddLocationIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

AddLocationIcon.Style = SvgIcon;
AddLocationIcon.displayName = 'AddLocationIcon';

export default AddLocationIcon
