import styled, { css } from 'styled-components';

interface ContainerSProps {
  animation?: 'zoom';
  hasThumb: boolean;
}

const BreakpointsArrowsS = css`
  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    .embla__button--prev {
      left: -10px;
    }

    .embla__button--next {
      right: -10px;
    }
  }
  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobile}) {
    .embla__button--prev {
      top: 70%;
      left: -10px;
    }

    .embla__button--next {
      top: 70%;
      right: -10px;
    }
  }
`;
const BreakpointsThumbS = css`
  @media (max-width: 1040px) {
    .embla__slide--thumb {
      min-width: 20%;
    }
  }

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    .embla__button--prev {
      left: 10px;
    }

    .embla__button--next {
      right: 10px;
    }
  }

  @media (max-width: 568px) {
    .embla__slide--thumb {
      min-width: 25%;
    }
  }
  @media (max-width: 436px) {
    .embla__slide--thumb {
      min-width: 35%;
    }
  }
  @media (max-width: 329px) {
    .embla__slide--thumb {
      min-width: 45%;
    }
  }
`;

export const ContainerS = styled.section<ContainerSProps>`
  .embla {
    position: relative;
    margin-left: auto;
    margin-right: auto;
  }

  .embla__viewport {
    overflow: hidden;
    width: 100%;
  }

  .embla__viewport.is-draggable {
    cursor: move;
    cursor: grab;
  }

  .embla__viewport.is-dragging {
    cursor: grabbing;
  }

  .embla__container {
    display: flex;
    user-select: none;
    margin-left: -10px;
  }

  .embla__slide {
    padding-left: 10px;
    min-width: 100%;
    position: relative;
  }

  .embla__slide__inner {
    position: relative;
    overflow: hidden;
  }

  .embla__slide__img {
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    width: auto;
    min-width: 100%;
    max-width: none;
    min-height: 100%;
    transform: translate(-50%, -50%);
  }

  .embla--thumb {
    padding-top: 0;
    margin-top: -12px;
  }

  .embla__container--thumb {
    cursor: default;
    margin-left: -8px;
  }

  .embla__slide--thumb {
    margin-top: 2rem;
    padding-left: 8px;
    min-width: 10%;
  }

  .embla__slide__inner--thumb {
    touch-action: manipulation;
    cursor: pointer;
    border: 0;
    outline: 0;
    margin: 0;
    padding: 0;
    height: 100px;
    width: 100%;
    background-color: transparent;
    position: relative;
    display: block;
    overflow: hidden;
  }

  .embla__slide__thumbnail {
    position: absolute;
    top: 0;
    bottom: 0;
    left: -100%;
    right: -100%;
    margin: auto;
    min-width: 1000%;
    min-height: 1000%;
    max-width: none;
    transition: opacity 0.2s;
  }
  .embla__button {
    outline: 0;
    cursor: pointer;
    background-color: transparent;
    touch-action: manipulation;
    position: absolute;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
    border: 0;
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
    fill: rgb(var(--color-primary));
    padding: 0;
  }

  .embla__button:disabled {
    cursor: default;
    opacity: 0.3;
  }

  .embla__button__svg {
    width: 100%;
    height: 100%;
  }

  .embla__button--prev {
    left: -27px;
  }

  .embla__button--next {
    right: -27px;
  }

  .embla__slide--thumb.is-selected > button img {
    border: 4px solid rgb(var(--color-dark)) !important;
    object-fit: cover;
  }

  ${({ animation }) =>
    animation === 'zoom' &&
    css`
      .animation-carousel {
        img {
          transition: 0.8s ease-in-out;
          transform: scale(0.6);
        }
        &.zoom {
          img {
            transform: scale(1);
          }
        }
      }
    `}

  ${({ hasThumb }) => (!hasThumb ? BreakpointsArrowsS : BreakpointsThumbS)}
`;
