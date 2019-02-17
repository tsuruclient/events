export const tsuruLinkClickKey = 'tsuru-link-click';
export const handleLinkClick = (account: string, column: string, href: string) => {
    document.dispatchEvent(new CustomEvent(
        tsuruLinkClickKey,
        {
            detail: {
                href,
                account,
                column,
            }
        }
    ))
};

export const tsuruUserClickKey = 'tsuru-user-click';
export const handleUserClick = (account: string, column: string, id: string) => {
    document.dispatchEvent(new CustomEvent(
        tsuruUserClickKey,
        {
            detail: {
                id,
                account,
                column,
            }
        }
    ))
};


