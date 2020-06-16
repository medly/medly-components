import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import AddBoxIconSvg from '../../assets/Content/add_box_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AddBoxIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AddBoxIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

AddBoxIcon.Style = SvgIcon;
AddBoxIcon.displayName = 'AddBoxIcon';

export default AddBoxIcon
