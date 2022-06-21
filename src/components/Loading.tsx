export const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-2 fixed z-10 w-screen h-screen bg-indigo-900">
            <p>Carregando...</p>
            <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            width="80px" height="80px" viewBox="0 0 50 50" xmlSpace="preserve">
            <path fill="#a5b4fc" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
            <animateTransform attributeType="xml"
                attributeName="transform"
                type="rotate"
                from="0 25 25"
                to="360 25 25"
                dur="0.6s"
                repeatCount="indefinite"/>
            </path>
            </svg>
        </div>
    )
}