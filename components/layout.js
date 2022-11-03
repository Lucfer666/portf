import Navegacion from './navbar/Navbar'
const Layout = ({children})=>{
  return(
    <div>
      <Navegacion/>
      <main>
	{children}
      </main>
    </div>
  )
}
export default Layout
