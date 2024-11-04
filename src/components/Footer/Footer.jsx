import "./Footer.css"

const Footer = () => {
    return (
        <div className="container mx-auto p-4 py-16">
            <div className="flex flex-col gap-3 mt-4">
                <h2 className="text-4xl lg:text-5xl font-bold text-center">Gadget Heaven</h2>
                <p className="text-base text-center px-5">Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <div className="divider"></div>
            <footer className="footer text-base-content p-10 w-10/12 lg:w-2/3 mx-auto">
                <nav className="flex flex-col md:items-center w-full">
                    <h6 className="text-lg font-bold mb-2">Services</h6>
                    <a className="link link-hover">Product Support</a>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Shipping & Delivery</a>
                    <a className="link link-hover">Returns</a>
                </nav>
                <nav className="flex flex-col md:items-center w-full">
                    <h6 className="text-lg font-bold mb-2">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav className="flex flex-col md:items-center w-full">
                    <h6 className="text-lg font-bold mb-2">Legal</h6>
                    <a className="link link-hover">Terms of Service</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;