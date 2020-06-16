import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import InsertPhotoIconSvg from '../../assets/Editor/insert_photo_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const InsertPhotoIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <InsertPhotoIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

InsertPhotoIcon.Style = SvgIcon;
InsertPhotoIcon.displayName = 'InsertPhotoIcon';

export default InsertPhotoIcon
