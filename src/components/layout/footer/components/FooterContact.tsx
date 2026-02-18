import { FOOTER_CONTACT } from "../data/footer-data";

export function FooterContact() {
  return (
    <div className="flex-1 px-0 md:px-16 flex flex-col gap-4 text-center md:text-left">
      <div>
        <h3 className="text-lg font-semibold mb-1">Hubungi Kami</h3>
        <p className="text-sm text-white">{FOOTER_CONTACT.phone}</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-1">Alamat</h3>
        <p className="text-sm text-white leading-relaxed">
          {FOOTER_CONTACT.address}
        </p>
      </div>
    </div>
  );
}
