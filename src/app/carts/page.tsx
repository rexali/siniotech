import Script from "next/script";
import Modal from "../Modal";

export default function CartPage() {
    return (
        <main>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top" style={{ backgroundColor: 'green' }}>
                <a className="d-md-none" data-toggle="collapse" data-target="#navbarCollapse"><i className="fa fa-bars text-white"></i></a>
                <a href="/" className="navbar-brand text-white" id="bizName">SINIOCART</a>
                <a href="tel:07016807004" id="telPhone" className="text-white d-md-none"><i className="fa fa-phone"></i></a>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#review">REVIEW</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#demo">PRODUCT DEMO</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link text-white" href="#description">DESCRIPTION</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link text-white" href="#feature">FEATURES</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link text-white" href="#pricing">PRICING</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="container" style={{ marginTop: 70 }}>
                <div id="productDetailHtml"></div>
                <div id="reviewHtml"></div><br /><br />
            </div>
            {/* product modal */}
            <Modal />
            <script src="./cart.js" defer></script>
        </main>
    )
}