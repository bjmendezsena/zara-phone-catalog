// Mock for Next.js Image component
const Image = ({ src, alt, width, height, priority, className, ...props }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      data-priority={priority}
      {...props}
    />
  );
};

export default Image;
