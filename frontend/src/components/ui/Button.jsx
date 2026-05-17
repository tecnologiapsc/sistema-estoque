export default function Button({
    title,
    onClick,
    type = 'button'
}) {
    return (
        <button
        type={type}
        onClick={onClick}
        className="bg-blue-600
        hover:bg-blue-700
        text-white
        px-4
        py-2
        rounded
        w-full"
        >
            {title}
        </button>
    )
}