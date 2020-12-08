import { WithStyle } from '@medly-components/utils/src';
import React, { useMemo } from 'react';
import Text from '../Text';
import { CenterAligned, LoadingBox } from './CenterAlignedLoader.styled';
import Loader from './Loader.svg';
import { CenterAlignedLoaderProps } from './types';

export const CenterAlignedLoader: React.FC<CenterAlignedLoaderProps> & WithStyle = React.memo(
    ({ loader, withLoadingBox, ...restProps }) => {
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
    }
);

CenterAlignedLoader.Style = CenterAligned;
CenterAlignedLoader.displayName = 'CenterAlignedLoader';
CenterAlignedLoader.defaultProps = {
    loader: <Loader />,
    withLoadingBox: false,
    withOverlay: false,
    position: 'relative'
};
