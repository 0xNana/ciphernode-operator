type IconProps = {
  className?: string;
};

function XIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

function TelegramIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 1 0 24 12 12.013 12.013 0 0 0 11.944 0Zm4.962 8.184-1.968 9.277c-.146.658-.537.818-1.084.509l-2.998-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.022c.242-.213-.054-.333-.373-.121l-6.87 4.326-2.962-.924c-.643-.204-.658-.643.136-.953l11.57-4.46c.537-.194 1.006.131.828.94Z" />
    </svg>
  );
}

function GitHubIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297a12 12 0 0 0-3.797 23.384c.6.113.82-.258.82-.577v-2.234c-3.338.724-4.033-1.61-4.033-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.381 1.235-3.221-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 6.004 0c2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.911 1.23 3.221 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .322.21.697.825.577A12 12 0 0 0 12 .297Z" />
    </svg>
  );
}

const socialLinks = [
  {
    platform: "X",
    handle: "@0xelegant",
    href: "https://x.com/0xelegant",
    Icon: XIcon,
  },
  {
    platform: "Telegram",
    handle: "@Elegant_CF",
    href: "https://t.me/Elegant_CF",
    Icon: TelegramIcon,
  },
  {
    platform: "GitHub",
    handle: "0xNana",
    href: "https://github.com/0xNana",
    Icon: GitHubIcon,
  },
];

export function SocialLinks() {
  return (
    <nav className="social-links" aria-label="Creator profiles">
      {socialLinks.map(({ platform, handle, href, Icon }) => (
        <a
          key={platform}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={`${platform}: ${handle} (opens in a new tab)`}
        >
          <Icon className="social-link-icon" />
          <span>{handle}</span>
        </a>
      ))}
    </nav>
  );
}
