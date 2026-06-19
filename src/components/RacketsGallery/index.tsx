"use client";

import RacketItem from "@/components/RacketItem";
import useEmblaCarousel from "embla-carousel-react";
import Ssr from "embla-carousel-ssr";
import { useId, use } from "react";
import { Racket } from "@/domain/racket";
import { ApiResponse } from "@/domain/dto";

export default function RacketsGallery(props: {
  rackets: ApiResponse<Racket[]>;
}) {
  const { data } = use(props.rackets);
  const carouselId = useId();
  const [emblaRef, emblaApi, emblaServerApi] = useEmblaCarousel(
    { loop: true },
    [Ssr({ slideSizes: data?.map(() => 33.3) })],
  );

  const renderSsrStyles = !emblaApi;
  const goToPrev = () => emblaApi?.goToPrev();
  const goToNext = () => emblaApi?.goToNext();

  if (!data) {
    return null;
  }

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
            {data.map((item) => (
              <div key={item.id} className="embla__slide">
                <RacketItem racket={item} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex">
          <button className="embla__prev" onClick={goToPrev}>
            сюда
          </button>
          <button className="embla__next ml-auto" onClick={goToNext}>
            туда
          </button>
        </div>
      </div>
    </>
  );
}
