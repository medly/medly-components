import React, { useMemo } from 'react';
import Text from '../Text';
import { CenterAligned, LoadingBox } from './CenterAlignedLoader.styled';
import Loader from './Loader.svg';
import { Props } from './types';

export const CenterAlignedLoader: React.FC<Props> = React.memo(({ loader, withLoadingBox, withOverlay }) => {
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
        <CenterAligned withOverlay={withOverlay} withLoadingBox={withLoadingBox}>
            {children}
        </CenterAligned>
    );
});

CenterAlignedLoader.displayName = 'CenterAlignedLoader';
CenterAlignedLoader.defaultProps = {
    loader: <Loader />,
    withLoadingBox: false,
    withOverlay: false
};
