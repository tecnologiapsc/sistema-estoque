export default function Modal({
    
    children,
    isOpen

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
            justfy-center
        ">

            <div className="
                bg-white
                p-6
                rounded
                w-[500px]
            ">
                
                {children}

            </div>

        </div>
    )
}