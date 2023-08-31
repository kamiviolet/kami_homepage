import React from "react";
import SocialMediaType from "@/types/socialmedia.type";

export default function SocialMediaCard({ sc }: { sc: SocialMediaType }) {
  const { name, icon, path } = sc;

  return (
    <a href={path} target="_blank" rel="noreferrer">
      <div className="social_media_card">
        <p>{icon}</p>
        <p>{name}</p>
      </div>
    </a>
  );
}
