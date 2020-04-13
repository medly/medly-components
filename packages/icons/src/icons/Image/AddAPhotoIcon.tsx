import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AddAPhotoIconSvg from '../../assets/Image/add_a_photo_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AddAPhotoIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <AddAPhotoIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

AddAPhotoIcon.Style = SvgIcon;
AddAPhotoIcon.displayName = 'AddAPhotoIcon';

export default AddAPhotoIcon
