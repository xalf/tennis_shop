"use client";

import RacketItem from "@/components/RacketItem";
import useEmblaCarousel from "embla-carousel-react";
import Ssr from "embla-carousel-ssr";
import { useId } from "react";
import { Racket } from "@/domain/racket";

export default function RacketsGallery(props: { rackets: Racket[] }) {
  const carouselId = useId();
  const [emblaRef, emblaApi, emblaServerApi] = useEmblaCarousel(
    { loop: true },
    [Ssr({ slideSizes: props.rackets.map(() => 33.3) })], // Each slide is 50% of the viewport width
  );

  const renderSsrStyles = !emblaApi;
  const goToPrev = () => emblaApi?.goToPrev();
  const goToNext = () => emblaApi?.goToNext();

  return (
    <>
      {renderSsrStyles && (
        <style>
          {emblaServerApi
            .plugins()
            .ssr?.getStyles(`#${carouselId}`, ".embla__slide")}
        </style>
      )}
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container" id={carouselId}>
            {props.rackets.map((item) => (
              <div key={item.id} className="embla__slide">
                <RacketItem racket={item} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex">
          <button className="embla__prev" onClick={goToPrev}>
            Scroll to prev
          </button>
          <button className="embla__next ml-auto" onClick={goToNext}>
            Scroll to next
          </button>
        </div>
      </div>
    </>
  );
}
