import { Area, AreaChart, Bar, BarChart, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css';

const Dashboard = () => {
   
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    

    return(
       <div className="charts">
            <div className="">
                <LineChart width={600} height={400}  data={data}>
                    <Line dataKey={'sell'} stroke="#e5ad06"></Line>
                    <XAxis dataKey={'month'}></XAxis>
                    <Tooltip></Tooltip>
                    <YAxis></YAxis>
                    <Legend />
                </LineChart>
            </div>

            <div className="">
                <AreaChart width={600} height={400} data={data}>
                    <Area dataKey={'investment'} fill="#ff9800"></Area>
                    <Area dataKey={'revenue'} fill="#ff5722"></Area>
                    <XAxis dataKey={'month'}></XAxis>
                    <Tooltip></Tooltip>
                    <YAxis></YAxis>
                    <Legend />
                </AreaChart>
            </div>

            <div className="">
                <BarChart width={600} height={400} data={data}>
                        <Bar dataKey={'investment'} stackId="a" fill="#009688"></Bar>
                        <Bar dataKey={'revenue'} stackId="a" fill="#70c4bb"></Bar>
                        <XAxis dataKey={'month'}></XAxis>
                        <Tooltip></Tooltip>
                        <YAxis></YAxis>
                        <Legend />
                </BarChart>
            </div>

            <div className="">
                <PieChart width={600} height={400} data={data}>
                        <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#53752c" />
                        <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#00bcd4" label />
                        <Tooltip></Tooltip>
                        <Legend />
                </PieChart>
            </div>

            
       </div>
    )

};


export default Dashboard;