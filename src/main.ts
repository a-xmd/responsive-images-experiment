import EmblaCarousel from "embla-carousel";

const emblaNode = document.querySelector(".embla");
const options = { loop: false };

if (emblaNode) {
  const emblaApi = EmblaCarousel(emblaNode as HTMLElement, options);
  console.log(emblaApi.slideNodes()); // Access API
}
