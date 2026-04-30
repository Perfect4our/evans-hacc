export type AnchorLink = {
  id: string;
  label: string;
};

type AnchorNavProps = {
  links: readonly AnchorLink[];
};

export function AnchorNav({ links }: AnchorNavProps) {
  return (
    <nav className="anchor-nav" aria-label="Section navigation">
      {links.map((link) => (
        <a key={link.id} className="anchor-nav__link" href={`#${link.id}`}>
          {link.label}
        </a>
      ))}
    </nav>
  );
}

