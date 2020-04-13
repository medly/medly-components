import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AddPhotoAlternateIconSvg from '../../assets/Image/add_photo_alternate_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AddPhotoAlternateIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <AddPhotoAlternateIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

AddPhotoAlternateIcon.Style = SvgIcon;
AddPhotoAlternateIcon.displayName = 'AddPhotoAlternateIcon';

export default AddPhotoAlternateIcon
