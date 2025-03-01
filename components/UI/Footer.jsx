import {
  FaXTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaFacebook,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa6";

const navigation = {
  main: [
    { name: "About Us", href: "/#about" },
    { name: "Partner With Us", href: "/#parter" },
    { name: "Our Services", href: "/services" },
    { name: "Our Products", href: "/products" },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/12CACMaC2mB/",
      icon: FaFacebook,
    },
    {
      name: "Youtube",
      href: "https://www.youtube.com/@NakuruTubers",
      icon: FaYoutube,
    },

    {
      name: "Twitter",
      href: "https://x.com/NakuruTubers?t=qgLns5hH9WIBsK5S8-6FFg&s=09",
      icon: FaXTwitter,
    },

    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/nakuru-tubers/",
      icon: FaLinkedinIn,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/nakurutubers?igsh=aGFpdXJkejVpdnZx",
      icon: FaInstagram,
    },
    {
      name: "Tiktok",
      href: "https://www.tiktok.com/@nakurutubers?_t=ZS-8t7AJvR1cDB&_r=1",
      icon: FaTiktok,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-100">
      <div className="mx-auto max-w-7xl overflow-hidden py-20 px-6 sm:py-16 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a
                href={item.href}
                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-emerald-600"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; {new Date().getFullYear()} Nakuru Tubers. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
