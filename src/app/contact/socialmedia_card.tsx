import React from "react";
import SocialMediaType from "@/types/socialmedia.type";
import Link from "next/link";

export default function SocialMediaCard({
  sc,
  styles,
}: {
  sc: SocialMediaType;
  styles: any;
}) {
  const { name, icon, path } = sc;

  return (
    <div className={styles.card}>
      <p className="text-3xl">{icon}</p>
      <Link href={path} target="_blank">
        {name}{" "}
      </Link>
    </div>
  );
}
