import Head from 'next/head'
import AboutMe from '../components/AboutMe'
import Introduction from '../components/Introduction'
import TechStack from '../components/TechStack'


export default function Home() {
  return (
    <div className=" min-h-screen" >
      <Introduction/>
      <AboutMe/>
      <TechStack/>
    </div>
  )
}
