import { FaXTwitter, FaLinkedinIn, FaFacebook} from "react-icons/fa6";

const navigation = {
  main: [
    { name: "About Us", href: "#" },
    { name: "Partner With Us", href: "#" },
    { name: "Our Packages", href: "#" },
    { name: "Our Products", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/12CACMaC2mB/",
      icon: FaFacebook
    },
 
    {
      name: "Twitter",
      href: "https://x.com/NakuruTubers?t=qgLns5hH9WIBsK5S8-6FFg&s=09",
      icon: FaXTwitter
    },

    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/nakuru-tubers/",
      icon: FaLinkedinIn
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
