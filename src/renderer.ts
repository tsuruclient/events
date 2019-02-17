export const keys = {
    tsuruLinkClick: "tsuru-link-click",
    tsuruUserClick: "tsuru-user-click",
};

export const handleLinkClick = (account: string, column: string, href: string) => {
    document.dispatchEvent(new CustomEvent(
        keys.tsuruLinkClick,
        {
            detail: {
                href,
                account,
                column,
            }
        }
    ))
};

export const handleUserClick = (account: string, column: string, id: string) => {
    document.dispatchEvent(new CustomEvent(
        keys.tsuruUserClick,
        {
            detail: {
                id,
                account,
                column,
            }
        }
    ))
};


