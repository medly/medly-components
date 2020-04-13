import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AddToHomeScreenIconSvg from '../../assets/Device/add_to_home_screen_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AddToHomeScreenIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AddToHomeScreenIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

AddToHomeScreenIcon.Style = SvgIcon;
AddToHomeScreenIcon.displayName = 'AddToHomeScreenIcon';

export default AddToHomeScreenIcon
