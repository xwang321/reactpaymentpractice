export const Radio =({ children, current, onClick, ...rest}) => {
    return (
        <div
        className = { current ? "radio activated" : "radio"}
        onClick ={ onClick }
        {...rest}
        >
            {children}
        </div>
    )
}