import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AddToPhotosIconSvg from '../../assets/Image/add_to_photos_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AddToPhotosIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <AddToPhotosIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

AddToPhotosIcon.Style = SvgIcon;
AddToPhotosIcon.displayName = 'AddToPhotosIcon';

export default AddToPhotosIcon
