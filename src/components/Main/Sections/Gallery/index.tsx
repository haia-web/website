/* eslint-disable react/no-danger */
import { Button } from '@components/Button';
import { Carousel } from '@components/Carousel';
import { CarouselItem } from '@components/Carousel/CarouselItem';
import { Dialog } from '@components/Dialog';
import Image from 'next/image';
import { gallery } from './gallery';
import { ContainerS } from './styles';

function getImageURL(id: number) {
  return `/imgs/gallery/gallery-${id}.webp`;
}

export const Gallery = () => {
  return (
    <ContainerS className="mx-w">
      <h2>ONDE VIVER É MAIS QUE EXISTIR</h2>
      <span className="info">Imagens meramente ilustrativas</span>
      <Dialog>
        <Carousel
          slides={gallery.map((image) => ({
            id: image.id,
            src: getImageURL(image.id),
            alt: image.label,
          }))}
        >
          {gallery.map((image) => {
            const labelHtml = image.label
              .replace(/\*{2}(?:\s|$)/, '</strong> ')
              .replace('**', '<strong>');

            return (
              <CarouselItem key={image.id}>
                <div className="gallery">
                  <div className="mark">
                    <span dangerouslySetInnerHTML={{ __html: labelHtml }} />
                  </div>
                  <Image
                    src={getImageURL(image.id)}
                    data-fancybox="gallery"
                    data-src={getImageURL(image.id)}
                    data-caption={image.label.replace('**', '')}
                    alt={image.label.replace('**', '')}
                    layout="fill"
                  />
                </div>
              </CarouselItem>
            );
          })}
        </Carousel>
      </Dialog>
      <Button type="button" variant="dark">
        Saiba Mais
      </Button>
    </ContainerS>
  );
};
