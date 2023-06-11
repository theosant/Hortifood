import "../styles/products.css";
import Card from "../components/Card"

const Products = ({type, products}) => {

    let src = `banner_${type}.jpg`;

    return (
        <div>
            <div className="site_section_banner">
                <img src={src} alt="banner" />
            </div>
            <div className="products_container" style={{display: "inline-block"}}>
                {
                    products.map((product) => (
                        <Card card = {product} />
                    ))
                }
            </div>

        </div>
    )
};

export default Products