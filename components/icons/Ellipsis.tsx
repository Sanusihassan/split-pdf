import React from "react";

function EllipsisIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="682.667"
            height="682.667"
            version="1"
            viewBox="0 0 512 512"
            className={className}
        >
            <path
                d="M843 2926c-208-68-327-289-264-494 45-148 168-257 320-281 193-31 383 88 441 276 46 150 6 299-111 408-75 71-145 98-254 102-57 2-106-2-132-11zM2443 2926c-208-68-327-289-264-494 45-148 168-257 320-281 193-31 383 88 441 276 46 150 6 299-111 408-75 71-145 98-254 102-57 2-106-2-132-11zM4043 2926c-208-68-327-289-264-494 45-148 168-257 320-281 193-31 383 88 441 276 46 150 6 299-111 408-75 71-145 98-254 102-57 2-106-2-132-11z"
                transform="matrix(.1 0 0 -.1 0 512)"
            ></path>
        </svg>
    );
}

export default EllipsisIcon;