export default function Nav() {
    return( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="index.html">HOME</a>
            <a className="nav-item nav-link" href="services.html">SERVICES</a>
            <a className="nav-item nav-link" href="about.html">ABOUT</a>
            <a className="nav-item nav-link" href="pricing.html">PRICING</a>
            <a className="nav-item nav-link" href="contact.html">CONTACT US</a>
          </div>
        </div>
      </nav>
    );
}