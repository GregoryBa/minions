import Layout from '../components/layouts/main'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} key={router.route} />
    </Layout>
  )
}

export default MyApp
