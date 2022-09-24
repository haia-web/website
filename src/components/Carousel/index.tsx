import { useCallback, useEffect, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { NextButton, PrevButton } from './Buttons';
import { ContainerS } from './styles';
import { Thumb } from './Thumb';

interface CarouselProps {
  loop?: boolean;
  slides?: { src: string; alt: string; id: string }[];
  children: React.ReactNode;
  animation?: 'zoom';
}

export const Carousel = ({
  slides,
  loop,
  children,
  animation,
}: CarouselProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const slidesRef = useRef<HTMLDivElement>(null);
  const [mainViewportRef, embla] = useEmblaCarousel();
  const [thumbViewportRef, emblaThumbs] = useEmblaCarousel({
    loop,
    dragFree: true,
    containScroll: 'keepSnaps',
  });

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onThumbClick = useCallback(
    (index: number) => {
      if (!embla || !emblaThumbs) return;
      if (emblaThumbs.clickAllowed()) embla.scrollTo(index);
    },
    [embla, emblaThumbs],
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());

    if (emblaThumbs) emblaThumbs.scrollTo(embla.selectedScrollSnap());
  }, [embla, emblaThumbs, setSelectedIndex]);
  const onAnimation = useCallback(() => {
    if (!embla && !slidesRef.current) return;
    slidesRef.current?.childNodes.forEach((child) => {
      (child as HTMLDivElement).classList.remove('zoom');
    });
    const selectedElement = slidesRef.current?.childNodes[
      embla!.selectedScrollSnap()
    ] as HTMLDivElement;
    selectedElement.classList.add('zoom');
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on('select', onSelect);
    if (animation) embla.on('select', onAnimation);
  }, [embla, onSelect, animation, onAnimation]);
  useEffect(() => {
    if (slidesRef.current)
      slidesRef.current.childNodes.forEach((child, i) => {
        (child as HTMLDivElement).classList.add('animation-carousel');
        if (i === 0) (child as HTMLDivElement).classList.add('zoom');
      });
  }, []);

  return (
    <ContainerS animation={animation}>
      <div className="embla">
        <div className="embla__viewport" ref={mainViewportRef}>
          <div className="embla__container" ref={slidesRef}>
            {children}
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>

      {slides && (
        <div className="embla embla--thumb">
          <div className="embla__viewport" ref={thumbViewportRef}>
            <div className="embla__container embla__container--thumb">
              {slides.map((item, i) => (
                <Thumb
                  onClick={() => onThumbClick(i)}
                  selected={i === selectedIndex}
                  imgSrc={item.src}
                  key={item.id}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </ContainerS>
  );
};
