import Link from 'next/link';
import clsx from 'clsx';

function Button({ href, target, children, className, variant }) {
    return (
        <Link
            href={href || String()}
            target={target || String()}
            className={clsx(className, 'flex items-center justify-center w-fit text-xs sm:text-sm font-medium text-center', {
                'text-background-1 bg-accent-1 py-2 px-4 rounded-full outline outline-[1px] outline-accent-1/15 outline-offset-4 relative after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-3 after:w-3/4 after:h-2 after:bg-accent-1 after:rounded-full after:blur-xl after:will-change-[filter,opacity] after:opacity-30 duration-150 after:hover:opacity-50 hover:opacity-90 hover:outline-offset-[3px]': variant === 1,
                'text-foreground-1 bg-background-2 py-2 px-4 border border-border-1 rounded-full overflow-hidden relative after:absolute after:top-0 after:left-0 after:w-full after:h-1/2 after:bg-gradient-to-b after:from-border-1/60 after:to-transparent': variant === 2,
            })}
        >
            {children}
        </Link>
    );
}

export { Button };
