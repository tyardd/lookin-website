"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import menuData from "./menuData";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-ink/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between lg:h-20">
        <Link href="/" aria-label="Lookin home" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo-white.png"
            alt="Lookin"
            width={353}
            height={122}
            priority
            className="h-9 w-auto lg:h-10"
          />
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Main">
          {menuData.map((item) => (
            <Link
              key={item.id}
              href={item.path}
              className="text-sm font-medium text-mist transition-colors hover:text-white"
            >
              {item.title}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="rounded-md bg-accent-deep px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent"
          >
            Contact us
          </Link>
        </nav>

        <button
          type="button"
          className="-mr-2 flex h-11 w-11 items-center justify-center rounded-md text-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 md:hidden" aria-label="Mobile">
          <div className="container flex flex-col py-3">
            {menuData.map((item) => (
              <Link
                key={item.id}
                href={item.path}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-mist hover:text-white"
              >
                {item.title}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mb-2 mt-3 rounded-md bg-accent-deep px-5 py-3 text-center text-base font-semibold text-white"
            >
              Contact us
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
