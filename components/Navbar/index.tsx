import Link from 'next/link'
import Nav from './styled'


const Navbar = () => {
    return (
        <Nav>
            <div className="link-tribute">
                <h1 id="title">Tribute</h1>
                </div>
                <nav className="link-tribute1">
            <Link href="https://www.worldfoodprize.org/en/dr_norman_e_borlaug/about_norman_borlaug/"><a target="_blank" id="tribute-link">About</a></Link>
            <Link href="https://bgri.cornell.edu/dr-norman-borlaug/"><a target="_blank" id="tribute-link1">Info</a></Link>
            </nav>
        </Nav>
      )
}

export default Navbar;