import Link from "next/link";

export default function ProjectButton({
  children,
  link,
  styles,
  innerText,
}: {
  children: React.ReactNode;
  link: string;
  styles?: string;
  innerText: string;
}) {
  return (
    <Link
      className={`flex font-bold items-center my-4 me-6 text-base p-2 shadow rounded ${styles}`}
      href={link}
      target="_blank"
    >
      {children}
      <span className="mx-2">{innerText}</span>
    </Link>
  );
}
