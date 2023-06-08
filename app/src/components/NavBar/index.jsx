import "./index.css";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const NavBar = ({size}) => {
    return (
        <>
            <nav class="nav-links">
            <a href="./index.html" class="logo">HORTIFOOD</a>
            <input class="search-bar" type="text" placeholder="&#xF002; Buscar Frutas ou Verduras..." />
                    <a href="./login.html" class="login-btn">Entrar</a>
                    <a href="./login.html" class="cart-btn">
                        <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
                        <span>{size}</span>
                        Meu Carrinho
                    </a>
            </nav>
            <div style={{ height: '60px' }} />
        </>
    )
};

export default NavBar