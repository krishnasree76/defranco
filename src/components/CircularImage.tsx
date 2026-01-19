import { motion } from 'framer-motion';

interface CircularImageProps {
  imageSrc: string;
  alt: string;
  text?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const CircularImage = ({ 
  imageSrc, 
  alt, 
  text = "DEFRANCO PHARMACY", 
  size = 'md',
  className = '' 
}: CircularImageProps) => {
  const sizeClasses = {
    sm: 'w-48 h-48 md:w-64 md:h-64',
    md: 'w-64 h-64 md:w-80 md:h-80',
    lg: 'w-72 h-72 md:w-96 md:h-96',
  };

  const textRadius = {
    sm: 90,
    md: 115,
    lg: 140,
  };

  // Create circular text
  const repeatedText = `${text} ★ `.repeat(4);
  const characters = repeatedText.split('');

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      {/* Main circular image */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="absolute inset-4 md:inset-6 rounded-full overflow-hidden shadow-soft-lg z-10"
      >
        <img
          src={imageSrc}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Rotating text */}
      <motion.svg
        initial={{ opacity: 0, rotate: -30 }}
        whileInView={{ opacity: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        animate={{ rotate: 360 }}
        style={{ animationDuration: '30s', animationTimingFunction: 'linear', animationIterationCount: 'infinite' }}
        className="absolute inset-0 w-full h-full animate-spin-slow"
        viewBox="0 0 300 300"
      >
        <defs>
          <path
            id={`circlePath-${size}`}
            d={`M 150, 150 m -${textRadius[size]}, 0 a ${textRadius[size]},${textRadius[size]} 0 1,1 ${textRadius[size] * 2},0 a ${textRadius[size]},${textRadius[size]} 0 1,1 -${textRadius[size] * 2},0`}
          />
        </defs>
        <text className="fill-primary text-[11px] font-bold tracking-[0.3em] uppercase">
          <textPath href={`#circlePath-${size}`} startOffset="0%">
            {characters.map((char, i) => (
              <tspan key={i}>{char}</tspan>
            ))}
          </textPath>
        </text>
      </motion.svg>
    </div>
  );
};

export default CircularImage;
