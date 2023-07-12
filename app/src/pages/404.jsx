import '../styles/aboutus.css';
import SiteSections from '../components/SiteSections';

function Pagina404({backOffice = false}) {

    return (
        <div style={{ backgroundColor: "#EEEEEE" }}>
            <SiteSections type = "regular" backOffice={backOffice}/>
            <div className='main'>
                <div className='text'>
                <h1 className='notFound'>A página solicitada não existe... 🙃</h1>
                </div>
            </div>
        </div>
    );
}

export default Pagina404;