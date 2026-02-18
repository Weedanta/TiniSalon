import { FOOTER_BRAND } from "../data/footer-data";

export function FooterBrand() {
  return (
    <div className="flex-1 pr-0 md:pr-10 h-full my-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-5 text-black-signature">
        {FOOTER_BRAND.name}
      </h2>
      <div>
        <p className="font-semibold text-center md:text-left text-base mb-1">Jam Operasional</p>
        {FOOTER_BRAND.hours.map((hour) => (
          <p key={hour} className="text-sm text-white text-center md:text-left">
            {hour}
          </p>
        ))}
      </div>
    </div>
  );
}
