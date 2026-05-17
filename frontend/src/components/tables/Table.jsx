export default function Table({
    
    columns,
    data

}) {
    
    return (
        <table className="
            w-full 
            border-collapse
        ">

            <thead>

                <tr className="bg-gray-200">

                    {columns.map((column) =>(
                        <th 
                            key={column}
                            className="border p-2 text-left"
                        >

                            {column}
                        </th>
                    ))}

                </tr>

            </thead>

            <tbody>

                {data.map((item, index) =>(
                    <tr key={index}>

                        <td className="border p-2">
                            {item.name}                            
                        </td>

                        <td className="border p-2">
                            {item.stock}                            
                        </td>

                        <td className="border p-2">
                            {item.price}                            
                        </td>

                    </tr>
                ))}

            </tbody>

        </table>
    )
}