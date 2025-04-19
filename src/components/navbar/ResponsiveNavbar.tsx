const links = [
  { href: "#reasons", label: "Reasons" },
  { href: "#benefits", label: "Benefits" },
  { href: "gallery", label: "Cutiness" },
];

export default function ResponsiveNavbar() {
  return (
    <ul className="flex space-x-6 text-gray-700 font-medium">
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            className="hover:text-pink-600 transition-colors duration-200"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
