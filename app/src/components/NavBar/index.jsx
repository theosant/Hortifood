import "./index.css";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const NavBar = ({size, setshowCart}) => {
    
    return (
        <>
            <nav class="nav-links">
            <a href="./index.html" class="logo">HORTIFOOD</a>
            <input class="search-bar" type="text" placeholder="&#xF002; Buscar Frutas ou Verduras..." />
                    <a href="./login.html" class="login-btn">Entrar</a>
                    <button onClick={setshowCart} class="cart-btn">
                        <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
                        <span>{size}</span>
                        Meu Carrinho
                    </button>
            </nav>
            <div style={{ height: '60px' }} />
        </>
    )
};

export default NavBar