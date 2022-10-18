import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/Link'

export default function Home() {
  return (
    <div>
      <Image src='/banner.jpg'
	width={500}
	height= {200}
	layout="responsive"
	/>
      <h1 className='name'>Ismael Arce Ozuna</h1>
      <nav className='Navigation'>
	<ul>
	  <li><Link href='/about'>Acerca de</Link></li>
	  <li><Link href='/trabajos'>Trabajos</Link></li>
	  <li><Link href='/contacto'>Contacto</Link></li>
	</ul>
      </nav>
    </div>
  )
}
