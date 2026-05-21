import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';


export default function SalesChart() {

        const data = [{
            month: 'Jan',
            sales: 4000
        },
        {
            month: 'Fev',
            sales: 2500
        },
        {
            month: 'Mar',
            sales: 6000
        }
    ]

    return (
        <BarChart
            width={500}
            height={300}
            data={data}
        >

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Bar dataKey="sales" />

        </BarChart>
    )
}