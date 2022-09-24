interface CarouselItemProps {
  children: React.ReactNode;
}

export const CarouselItem = ({ children }: CarouselItemProps) => {
  return (
    <div className="embla__slide">
      <div className="embla__slide__inner">{children}</div>
    </div>
  );
};
