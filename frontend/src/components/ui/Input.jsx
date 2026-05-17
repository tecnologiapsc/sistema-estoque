export default function Input({
    
    type = 'text',
    placeholder,
    value,
    onChange

}) {

    return (
        <input 
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="
                w-full
                border
                border-gray-300
                p-2
                rounded
                mb-4
                outline-none
                focus:border-blue-500
            "
        />
    )
}