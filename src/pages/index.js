import Head from 'next/head'
import { Header} from '../Components/Header/Index'

export default function Home() {
  return (
    <div>
      <Head>
        <title>ePlus</title>
      </Head>
      <Header/>
    </div>
  )
}
