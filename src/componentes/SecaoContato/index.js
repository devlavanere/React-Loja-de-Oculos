export default function SecaoContato(){
    return(
        <section id = 'sobre' className = 'secao-contato'>
            <div className = 'contato' >
                <h3>Fale conosco</h3>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>

                <div className = 'contato-container'>

                    <div className = 'constato-conteudo'>
                        <h4>Contato</h4>
                        <div>
                            <img src = 'assets/local.png' title = 'Ícone local' alt = 'Ícone localização' />
                            <span>Nova Iguaçu, RJ</span>
                        </div>

                        <div>
                            <img src = 'assets/telefone.png' title = 'Ícone telefone' alt = 'Ícone telefone' />
                            <span>(21) 9999-9999</span>
                        </div>

                        <div>
                            <img src = 'assets/email.png' title = 'Ícone email' alt = 'Ícone email' />
                            <span>contato@oticavida.com</span>
                        </div>
                    </div>

                    <div className = 'constato-conteudo'>
                        <h4>Nossas Redes Sociais</h4>
                        <div>
                            <img src = 'assets/fb.png' title = 'Ícone facebook' alt = 'logo do facebook' />
                            <span>/OticaVida</span>
                        </div>

                        <div>
                            <img src = 'assets/ig.png' title = 'Ícone instagram' alt = 'logo do instagram' />
                            <span>@oticavidarj</span>
                        </div>

                        <div>
                            <img src = 'assets/tt.png' title = 'Ícone twitter' alt = 'logo do twitter' />
                            <span>@oticavidarj</span>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    )
}