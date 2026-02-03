import React from 'react';

interface SkeletonLoaderProps {
    height?: string;
    width?: string;
    className?: string;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ height = '1rem', width = '100%', className = '' }) => {
    return (
        <div
            className={`bg-gray-800 animate-pulse rounded ${className}`}
            style={{
                height,
                width,
                backgroundColor: '#1a1a1a',
            }}
        />
    );
};

export default SkeletonLoader;
