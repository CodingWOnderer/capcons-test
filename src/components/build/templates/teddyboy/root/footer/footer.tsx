import * as React from "react";

const getIconComponent = (iconName: string) => {
  const icons: Record<string, (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element> = {
    Facebook: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 
             12c0 4.991 3.657 9.128 8.438 
             9.878v-6.987h-2.54V12h2.54V9.797
             c0-2.506 1.492-3.89 3.777-3.89 
             1.094 0 2.238.195 2.238.195v2.46h-1.26
             c-1.243 0-1.63.771-1.63 
             1.562V12h2.773l-.443 
             2.89h-2.33v6.988C18.343 21.128 
             22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
    Instagram: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 
             3.808.06 1.064.049 1.791.218 
             2.427.465a4.902 4.902 0 011.772 1.153 
             4.902 4.902 0 011.153 1.772c.247.636.416 
             1.363.465 2.427.048 1.067.06 1.407.06 
             4.123v.08c0 2.643-.012 2.987-.06 
             4.043-.049 1.064-.218 1.791-.465 
             2.427a4.902 4.902 0 01-1.153 
             1.772 4.902 4.902 0 01-1.772 
             1.153c-.636.247-1.363.416-2.427.465
             -1.067.048-1.407.06-4.123.06h-.08c-2.643 
             0-2.987-.012-4.043-.06-1.064-.049-1.791
             -.218-2.427-.465a4.902 4.902 0 01-1.772
             -1.153 4.902 4.902 0 01-1.153-1.772c-.247
             -.636-.416-1.363-.465-2.427C2.013 
             14.987 2 14.643 2 12v-.08c0-2.643.013
             -2.987.06-4.043.049-1.064.218-1.791.465
             -2.427a4.902 4.902 0 011.153-1.772 
             4.902 4.902 0 011.772-1.153c.636-.247 
             1.363-.416 2.427-.465C9.013 2.013 9.357 
             2 12 2h.08zM12 5.838a6.162 6.162 0 
             100 12.324 6.162 6.162 0 000-12.324zm0 
             10.162a3.999 3.999 0 110-7.998 
             3.999 3.999 0 010 7.998zm6.406-11.845a1.44 
             1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
          clipRule="evenodd"
        />
      </svg>
    ),
    "Twitter/X": (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
      </svg>
    ),
    YouTube: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M19.615 3.184c.597.161 1.07.633 
                 1.232 1.232C21.25 5.675 
                 21.25 12 21.25 12s0 6.325-.403 
                 7.584a1.75 1.75 0 01-1.232 
                 1.232C18.325 21.25 12 
                 21.25 12 21.25s-6.325 0-7.584
                 -.403a1.75 1.75 0 01-1.232-1.232C2.75 
                 18.325 2.75 12 2.75 12s0-6.325.434
                 -7.584a1.75 1.75 0 011.232-1.232C5.675 
                 2.75 12 2.75 12 2.75s6.325 0 
                 7.615.434zM9.75 8.25v7.5l6-3.75-6-3.75z" />
      </svg>
    ),
  };

  return icons[iconName] || ((props) => <svg {...props}><text x="0" y="15">?</text></svg>);
};

export default function Footer() {
  const navigation = [
    { href: "/about", name: "About Us" },
    { href: "/privacy", name: "Privacy" },
    { href: "/terms", name: "Terms & Conditions" },
    { href: "/contact", name: "Contact Us" },
    { href: "/refund", name: "Returns and Refunds" },
  ];

  const social = [
    { name: "Facebook", href: "#", icon: "Facebook" },
    { name: "Instagram", href: "https://www.instagram.com/teddy_boy_denim/?hl=en", icon: "Instagram" },
    { name: "Twitter", href: "#", icon: "Twitter/X" },
    { name: "YouTube", href: "#", icon: "YouTube" },
  ];

  return (
    <footer className="transition-colors bg-black text-white">
      <div className="mx-auto overflow-hidden px-6 py-12 lg:px-8">
        {/* Navigation */}
        <nav className="mb-8">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm hover:opacity-75 transition-opacity"
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>

        {/* Social Links */}
        <div className="flex justify-center gap-x-6 mb-8">
          {social.map((item) => {
            const Icon = getIconComponent(item.icon);
            return (
              <a
                key={item.name}
                href={item.href}
                className="hover:opacity-75 transition-opacity"
              >
                <span className="sr-only">{item.name}</span>
                <Icon aria-hidden="true" className="size-6" />
              </a>
            );
          })}
        </div>

        {/* Copyright */}
        <p className="text-center text-sm leading-6">
          © 2025 Teddy Boy Denim. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
