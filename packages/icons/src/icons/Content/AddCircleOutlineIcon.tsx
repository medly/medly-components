import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AddCircleOutlineIconSvg from '../../assets/Content/add_circle_outline_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AddCircleOutlineIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AddCircleOutlineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

AddCircleOutlineIcon.Style = SvgIcon;
AddCircleOutlineIcon.displayName = 'AddCircleOutlineIcon';

export default AddCircleOutlineIcon
