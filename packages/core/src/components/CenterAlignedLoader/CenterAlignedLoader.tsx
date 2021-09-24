import { WithStyle } from '@medly-components/utils';
import React, { useMemo } from 'react';
import Text from '../Text';
import { CenterAligned, LoadingBox } from './CenterAlignedLoader.styled';
import Loader from './CircleLoader.svg';
import { CenterAlignedLoaderProps } from './types';

const Component: React.FC<CenterAlignedLoaderProps> = React.memo(({ loader, withLoadingBox, ...restProps }) => {
    const children = useMemo(
        () =>
            withLoadingBox ? (
                <LoadingBox>
                    {loader}
                    <Text>Loading...</Text>
                </LoadingBox>
            ) : (
                <>{loader}</>
            ),
        [withLoadingBox, loader]
    );
    return (
        <CenterAligned withLoadingBox={withLoadingBox} {...restProps}>
            {children}
        </CenterAligned>
    );
});
Component.displayName = 'CenterAlignedLoader';
Component.defaultProps = { loader: <Loader />, withLoadingBox: false, withOverlay: false, position: 'relative' };
export const CenterAlignedLoader: React.FC<CenterAlignedLoaderProps> & WithStyle = Object.assign(Component, { Style: CenterAligned });
