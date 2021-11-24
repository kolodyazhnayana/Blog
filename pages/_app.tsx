import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { withHydrate } from "effector-next"
import '../src/models/init'

const enhance = withHydrate()

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default enhance(MyApp)
