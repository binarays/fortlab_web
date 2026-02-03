import React from 'react';

interface SectionWrapperProps {
    children: React.ReactNode;
    id?: string;
    className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, id, className = '' }) => {
    return (
        <section
            id={id}
            className={`w-full min-h-screen py-20 px-6 md:px-12 lg:px-24 flex flex-col justify-center ${className}`}
            style={{ minHeight: 'fit-content', paddingBottom: '5rem', paddingTop: '5rem' }}
        >
            <div className="max-w-7xl mx-auto w-full">
                {children}
            </div>
        </section>
    );
};

export default SectionWrapper;
