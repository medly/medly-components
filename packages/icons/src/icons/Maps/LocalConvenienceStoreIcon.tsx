import { WithStyle } from '@medly-components/utils';
import { memo, FC } from 'react';
import LocalConvenienceStoreIconSvg from '../../assets/Maps/local_convenience_store_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LocalConvenienceStoreIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'LocalConvenienceStoreIcon';

const LocalConvenienceStoreIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default LocalConvenienceStoreIcon;
