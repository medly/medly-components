import { WithStyle } from '@medly-components/utils';
import { memo, FC } from 'react';
import AddPhotoAlternateIconSvg from '../../assets/Image/add_photo_alternate_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AddPhotoAlternateIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'AddPhotoAlternateIcon';

const AddPhotoAlternateIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default AddPhotoAlternateIcon;
