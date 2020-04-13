import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AddAPhotoIconSvg from '../../assets/Image/add_a_photo_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AddAPhotoIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AddAPhotoIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

AddAPhotoIcon.Style = SvgIcon;
AddAPhotoIcon.displayName = 'AddAPhotoIcon';

export default AddAPhotoIcon
