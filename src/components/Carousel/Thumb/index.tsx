import Image from 'next/image';

interface ThumbProps {
  selected: boolean;
  onClick: (ev: any) => void;
  imgSrc: string;
}

export const Thumb = ({ selected, onClick, imgSrc }: ThumbProps) => (
  <div
    className={`embla__slide embla__slide--thumb ${
      selected ? 'is-selected' : ''
    }`}
  >
    <button
      onClick={onClick}
      className="embla__slide__inner embla__slide__inner--thumb"
      type="button"
    >
      <Image
        src={imgSrc}
        className="embla__slide__thumbnail"
        alt="A cool cat."
        width={220}
        height={200}
      />
    </button>
  </div>
);
