import type { NextPage } from 'next'
import React from 'react';
import MyChart from '../components/charts/Chart'
import redstoneData from '../data/redstoneData'
import coalData from '../data/coalData'
import birchData from '../data/redstoneData'
import * as data from  '../data/carrotData'

const test.carrotData = data

const Home: NextPage = () => {
  return (
    <div className='bg-slate-600'>
      {/* Nav? */}
      <div className="flex justify-center bg-red-400 content-center mb='10'">
        <div className="w-14 h-14 text-lg bg-stone-400 justify-center">
          01
        </div>
        <div className="w-64 bg-amber-400 justify-center">
          02
        </div>
        <div className="w-32 bg-lime-300 justify-center">
          03
        </div>
      </div>
      {/* Charts */}
      {
      data.forEach(minion => {
        <MyChart data={'../data/redstoneData'} title={title} />
      })
        
      }


      <MyChart data={redstoneData} title="Redstone" />
      <MyChart data={coalData} title='Coal' />
      <MyChart data={birchData} title='Birch' />
      <MyChart data={birchData} title='Carrot' />
      <MyChart data={birchData} title='' />
      <MyChart data={birchData} title='Birch' />
      <MyChart data={birchData} title='Birch' />
      <MyChart data={birchData} title='Birch' />
      <MyChart data={birchData} title='Birch' />
      <MyChart data={birchData} title='Birch' />
      <MyChart data={birchData} title='Birch' />


    </div >
  )
}

const titles = [redstoneData, coalData, birchData]

export default Home
