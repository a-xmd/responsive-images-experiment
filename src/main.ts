import "./frontpage.css";
import EmblaCarousel from "embla-carousel";

const rootNode = document.querySelector(".embla");
const viewportNode = rootNode
  ? rootNode!.querySelector(".embla__viewport")
  : null;

if (viewportNode && rootNode) {
  const embla = EmblaCarousel(viewportNode as HTMLElement);

  const prevButtonNode = rootNode!.querySelector(
    ".embla__prev",
  ) as HTMLButtonElement;
  const nextButtonNode = rootNode.querySelector(
    ".embla__next",
  ) as HTMLButtonElement;

  if (
    prevButtonNode instanceof HTMLButtonElement &&
    nextButtonNode instanceof HTMLButtonElement
  ) {
    (prevButtonNode as HTMLButtonElement).addEventListener(
      "click",
      () => {
        embla.scrollPrev();
      },
      false,
    );
    (nextButtonNode as HTMLButtonElement).addEventListener(
      "click",
      () => {
        embla.scrollNext();
      },
      false,
    );

    embla.on("select", () => {
      prevButtonNode.disabled = !embla.canScrollPrev();
      nextButtonNode.disabled = !embla.canScrollNext();
    });
  }
}
