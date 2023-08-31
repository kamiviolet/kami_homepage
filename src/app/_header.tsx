import React from "react";

export default function Header(): React.ReactNode {
  return (
    <header className="header">
      <div className="description">
        <p>Welcome to my homepage,</p>
        <h1>I&apos;m Kami</h1>
      </div>
      <div className="logo">
        <img src="/lazy_uranus.svg" alt="kami's logo: lazy uranus" />
      </div>
    </header>
  );
}
