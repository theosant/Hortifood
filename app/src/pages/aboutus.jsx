import '../styles/aboutus.css';
import SiteSections from '../components/SiteSections';

function AboutUs() {

    return (
        <div style={{ backgroundColor: "#EEEEEE" }}>
            <SiteSections type = "regular"/>
            <div className='main'>
                <div className='text'>
                    <h2>Sobre Nós</h2>
                    <p>O hortifood nasceu da mente de três empreendedores universitários do campus de São Carlos da USP. Eles decidiram facilitar a compra de produtos naturais de São Carlos, criando um meio de pedidos por delivery eficiente e com preços justos.</p>
                    <p>No início foram semanas de muito esforço programando a base do Hortifood na biblioteca do campus até conseguirem abrir um escritório e a primitiva primeira distribuidora. Hoje, 4 anos depois, o Hortifood é consolidado como o mercado de frutas, hortaliças e sucos favorito dos são-carlenses.</p>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
