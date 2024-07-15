import Link from 'next/link';
import clsx from 'clsx';

function Button({ href, children, className }) {
    return (
        <Link
            href={href || String()}
            className={clsx(
                'text-xs sm:text-sm font-medium text-center text-background-1 bg-accent-1 py-4 px-5 rounded-full outline outline-[1px] outline-accent-1/15 outline-offset-4 relative after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-3 after:w-3/4 after:h-2 after:bg-accent-1 after:rounded-full after:blur-xl after:will-change-[filter,opacity] after:opacity-30 duration-150 after:hover:opacity-50 hover:opacity-90 hover:outline-offset-[3px]',
                className
            )}
        >
            {children}
        </Link>
    )
}

export default Button;