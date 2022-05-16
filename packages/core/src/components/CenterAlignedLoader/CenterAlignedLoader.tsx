import { WithStyle } from '@medly-components/utils';
import type { FC } from 'react';
import { memo, useMemo } from 'react';
import Text from '../Text';
import { CenterAligned, LoadingBox } from './CenterAlignedLoader.styled';
import Loader from './CircleLoader.svg';
import { CenterAlignedLoaderProps } from './types';

const Component: FC<CenterAlignedLoaderProps> = memo(({ loader, withLoadingBox, loadingMessage, ...restProps }) => {
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
Component.defaultProps = { loader: <Loader />, withLoadingBox: false, loadingMessage: '', withOverlay: false, position: 'relative' };
export const CenterAlignedLoader: FC<CenterAlignedLoaderProps> & WithStyle = Object.assign(Component, { Style: CenterAligned });
