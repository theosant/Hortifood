import '../styles/aboutus.css';
import SiteSections from '../components/SiteSections';

function Thanks() {

    return (
        <div style={{ backgroundColor: "#EEEEEE" }}>
            <SiteSections type = "regular"/>
            <div className='main'>
                <div className='text'>
                    <h2>Agradecemos a preferência!</h2>
                    <p>Até a próxima</p>
                </div>
            </div>
        </div>
    );
}

export default Thanks;
