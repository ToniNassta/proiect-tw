function Logo({ size = 40 }) {
  return (
    <svg
      className="app-logo"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Electronics Store logo"
    >
      <circle cx="24" cy="24" r="23" stroke="currentColor" strokeWidth="2" />
      <path
        d="M24 10 L15 26 H22 L20 38 L33 20 H25 L27 10 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default Logo;
