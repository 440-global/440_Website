const Marquee = ({ images, speed = 30 }) => {
  const duplicated = [...images, ...images];

  return (
    <div className="relative overflow-hidden w-full py-6">
      <div
        className="flex w-max marquee-track marquee-paused animate-marquee hover:[animation-play-state:paused]"
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {duplicated.map((src, index) => (
          <div
            key={index}
            className="mx-8 flex items-center justify-center"
          >
            <img
              src={src.src}
              alt={`marquee-${index}`}
              className="h-10 md:h-16 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;