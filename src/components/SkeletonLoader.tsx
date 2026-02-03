import { motion } from 'framer-motion';

interface SkeletonProps {
  variant?: 'text' | 'card' | 'image' | 'button';
  className?: string;
}

export default function SkeletonLoader({ variant = 'text', className = '' }: SkeletonProps) {
  const baseClasses = 'bg-gray-800 rounded animate-pulse';

  const variantClasses = {
    text: 'h-4 w-full',
    card: 'h-64 w-full',
    image: 'h-48 w-full',
    button: 'h-12 w-32',
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    />
  );
}

export function SkeletonCard() {
  return (
    <div className="space-y-4">
      <SkeletonLoader variant="image" />
      <SkeletonLoader variant="text" className="w-3/4" />
      <SkeletonLoader variant="text" className="w-1/2" />
    </div>
  );
}

export function SkeletonSection({ count = 3 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
