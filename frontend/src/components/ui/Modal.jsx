export default function Modal({
    isOpen,
    title,
    children,
    onClose

}) {

    if (!isOpen) {
        return null
    }

    return (

        <div className="
            fixed
            insert-0
            bg-black/50
            flex
            items-center
            justify-center
            z-50
        ">

            <div className="
                bg-white
                w-[500px]
                rounded
                shadow-lg
                p-6
            ">

                <div className="
                    flex
                    justify-between
                    items-center
                    mb-4
                ">

                    <h2 className="text-xl font-bold">
                        {title}
                    </h2>

                    <button
                        onClick={onClose}
                        className="text-red-500"                        
                    >
                        X
                    </button>

                </div>

                {children}

            </div>
        </div>
    )
}