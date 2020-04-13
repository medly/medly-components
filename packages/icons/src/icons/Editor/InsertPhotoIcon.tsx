import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import InsertPhotoIconSvg from '../../assets/Editor/insert_photo_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const InsertPhotoIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <InsertPhotoIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

InsertPhotoIcon.Style = SvgIcon;
InsertPhotoIcon.displayName = 'InsertPhotoIcon';

export default InsertPhotoIcon
