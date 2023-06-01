import "./style.css";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const NavBar = (props) => {
    return (
        <><div class="nav">
            <a href="./index.html" class="logo">HORTIFOOD</a>
            <input class="search-bar" type="text" placeholder="&#xF002; Buscar Frutas ou Verduras..." />
                <nav class="nav-links">
                    <a href="./login.html" class="login-btn">Entrar</a>
                    <a href="#" class="cart-btn">
                        <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
                        Meu Carrinho
                    </a>
                </nav>
            </div>
        </>
    )
};
export default NavBar