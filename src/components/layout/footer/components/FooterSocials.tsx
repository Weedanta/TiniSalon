import Image from "next/image";
import Link from "next/link";
import { FOOTER_SOCIALS } from "../data/footer-data";

export function FooterSocials() {
  return (
    <div className="flex-1 items-center flex flex-col justify-center my-auto">
      <div className="flex flex-row md:flex-col gap-3 ">
        {FOOTER_SOCIALS.map(({ label, href, icon, alt }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-white hover:opacity-80 transition-opacity group font-semibold"
          >
            <span className="w-8 h-8 rounded-full flex items-center justify-center">
              <Image src={icon} alt={alt} className="w-full h-full" />
            </span>
            <p className="hidden md:block">{label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
