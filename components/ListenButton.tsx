export default function ListenButton() {
  return (
    <button
      type="button"
      className="flex h-[95px] w-full items-center justify-center gap-6 rounded-[22px] border border-[var(--color-border)] bg-[var(--color-button)] px-6 py-2 text-[23px] font-medium text-[var(--color-cream)] shadow-[inset_0_0_24px_rgba(255,255,255,0.03)] transition-[transform,opacity,background-color,border-color,box-shadow] duration-200 ease-out hover:scale-[1.02] hover:bg-[var(--color-button-hover)] hover:shadow-[inset_0_0_24px_rgba(255,255,255,0.03),0_0_21px_rgba(242,223,197,0.04)] active:scale-[0.985] sm:h-[111px] sm:gap-7 sm:py-3 sm:text-[27px] sm:font-semibold"
    >
      <span aria-hidden="true" className="text-[36px] leading-none sm:text-[42px]">▷</span>
      <span>Слушать сейчас</span>
    </button>
  );
}
