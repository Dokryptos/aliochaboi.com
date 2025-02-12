type CarouselNavigationProps = {
  onPrev: () => void;
  onNext: () => void;
};

export default function CarouselNavigation({
  onPrev,
  onNext,
}: CarouselNavigationProps) {
  return (
    <div className="absolute inset-0 flex">
      {/* Zone gauche pour prevProject */}
      <div
        className="w-1/2 h-full cursor-pointer"
        onClick={onPrev} // Appel de la fonction `onPrev` passée en props
      />

      {/* Zone droite pour nextProject */}
      <div
        className="w-1/2 h-full cursor-pointer"
        onClick={onNext} // Appel de la fonction `onNext` passée en props
      />
    </div>
  );
}
