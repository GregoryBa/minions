import Head from 'next/head'
import React from 'react';


type Props = {
  children: JSX.Element,
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Head>
        <meta name='viewport' />
        <title>Minions</title>
      </Head>
      <div>{children}</div>
    </div>
  )
}

export default Layout