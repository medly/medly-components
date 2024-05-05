import { WithStyle } from '@medly-components/utils';
import type { FCC } from 'react';
import { memo, useMemo } from 'react';
import Text from '../Text';
import { CenterAligned, LoadingBox } from './CenterAlignedLoader.styled';
import Loader from './CircleLoader.svg';
import { CenterAlignedLoaderProps } from './types';

const Component: FCC<CenterAlignedLoaderProps> = memo(({ loader, withLoadingBox, loadingMessage, ...restProps }) => {
    const children = useMemo(
        () =>
            withLoadingBox ? (
                <LoadingBox>
                    {loader}
                    <Text>{loadingMessage ? loadingMessage : 'Loading...'}</Text>
                </LoadingBox>
            ) : (
                <>{loader}</>
            ),
        [withLoadingBox, loadingMessage, loader]
    );
    return (
        <CenterAligned withLoadingBox={withLoadingBox} {...restProps}>
            {children}
        </CenterAligned>
    );
});
Component.displayName = 'CenterAlignedLoader';
Component.defaultProps = {
    loader: <Loader title="circle-loader" />,
    withLoadingBox: false,
    loadingMessage: '',
    withOverlay: false,
    position: 'relative'
};
export const CenterAlignedLoader: FCC<CenterAlignedLoaderProps> & WithStyle = Object.assign(Component, { Style: CenterAligned });
