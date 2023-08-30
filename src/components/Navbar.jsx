import '../styles/Navbar.css'

function Navbar(){
    return(
        <nav className="navbar bg-light orange navbar-expand-lg navbar-light fixed-top">
            <a className="navbar-brand crimson" href="#">
                <i className="fas fa-shopping-cart"></i> Grocery Delivery
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="ml-auto-cart">
                    <div>
                        <form className="search form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        </form>
                    </div>
                    <div className="menu-right">
                        {/* cart */}
                    </div>
                </div>
            </div>
      </nav>
    )
}

export default Navbar;