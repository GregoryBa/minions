import { BarChart, Bar, XAxis, YAxis, Line, CartesianGrid, Tooltip, Legend, AreaChart, ResponsiveContainer, Area } from 'recharts'
import { format, parseISO, subDays } from 'date-fns'


type Props = {
  data: any[]
  title: string
};

const MyChart: React.FC<Props> = ({ data, title }) => {
  return (
    <>
      <div className='flex justify-center mt-4'>
        <h2 className='text-white'>{title}</h2>
      </div>
      <div className='flex m-5 bg-slate-600 '>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id='color' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='0' stopColor='#2451B7' stopOpacity={0.7}></stop>
                <stop offset='75%' stopColor='#2451B7' stopOpacity={0.05}></stop>
              </linearGradient>
            </defs>
            <Area dataKey='value' stroke='#1e40af' fill='url(#color)' />
            <XAxis
              dataKey='date'
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              dataKey='value'
              axisLine={false}
              tickLine={false}
              tickCount={8}
            />
            <Tooltip content={<CustomTooltip />} />
            <CartesianGrid opacity={0.1} vertical={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  )
}

type IProps = {
  active: any[],
  payload: any[],
  label: any[]
}

const CustomTooltip: React.FC<IProps> = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className='tooltip'>
        {/* <h4>{format(parseISO(label), 'eeee, d MMM')}</h4> */}
        <h4 className=''>{label}</h4>
        <p>${payload[0].value.toFixed(2)}k</p>
      </div>
    )
  }
  return null;
}

export default MyChart