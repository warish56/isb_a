import Link from "next/link"


export const Footer = () => {
    return (
        <div className="body-wrapper">
            <div className="body-wrapper-content pb-20 row align-center row-end gap-20">
                <Link href="/" className="no-underline">
                    <span className="text-menu-button accent-dark-blue">Privacy</span>
                </Link>
                <Link href="/" className="no-underline">
                    <span className="text-menu-button accent-dark-blue">Terms</span>
                </Link>
                <Link href="/" className="no-underline">
                    <span className="text-menu-button accent-dark-blue">Get help</span>
                </Link>
            </div>
        </div>
    )
} 