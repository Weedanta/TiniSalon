import { FOOTER_COPYRIGHT } from "../data/footer-data";

export function FooterCopyright() {
  return (
    <div className="border-t border-white/20">
      <div className="lg:max-w-7xl mx-auto w-full px-6 md:px-8 lg:px-4 xl:px-0 py-4">
        <p className="text-center text-xs md:text-sm text-white/80">{FOOTER_COPYRIGHT}</p>
      </div>
    </div>
  );
}
