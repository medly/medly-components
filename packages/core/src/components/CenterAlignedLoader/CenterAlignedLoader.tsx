import { WithStyle } from '@medly-components/utils';
import { useMemo, memo } from 'react';
import Text from '../Text';
import { CenterAligned, LoadingBox } from './CenterAlignedLoader.styled';
import Loader from './CircleLoader.svg';
import { CenterAlignedLoaderProps } from './types';
import type { FC } from 'react';

const Component: FC<CenterAlignedLoaderProps> = memo(({ loader, withLoadingBox, ...restProps }) => {
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
export const CenterAlignedLoader: FC<CenterAlignedLoaderProps> & WithStyle = Object.assign(Component, { Style: CenterAligned });
