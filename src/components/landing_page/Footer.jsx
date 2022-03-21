import './Footer.css'
const footerAnchors = 
    ['Acerca de','Centro de ayuda',
    'Condiciones de Servicio', 'Política de Privacidad',
    'Política de cookies', 'Accesibilidad', 'Información de anuncios', 
    'Blog', 'Estado', 'Empleos', 'Recursos para marcas', 'Publicidad',
    'Marketing', 'Twitter para empresas', 'Desarrolladores', 'Guía', 'Configuración'
];

const Footer = (props) => {
    return (
        <footer className='footer-landing-page'>
            <nav>
                {footerAnchors.map(anchor => <a href='#'>{anchor}</a>)}
            </nav>
        </footer>
    )
}
export default Footer