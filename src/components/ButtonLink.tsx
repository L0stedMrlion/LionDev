import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

export function ButtonLink({
  children,
  href,
  className,
}: React.PropsWithChildren<{
  href: string;
  className?: string;
}>) {
  return (
    <Link
      href={href}
      className={twMerge(
        'cursor-pointer text-xl transition-colors duration-200',
        className
      )}
    >
      {children}
    </Link>
  );
}
