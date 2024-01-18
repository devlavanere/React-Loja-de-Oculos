import './style.css';

export default function SecaoContato(){
    return(
        <section id = 'sobre' className = 'secao-sobre'>
            <div className = 'secao-container container'>
                <h3>QUEM SOMOS NÓS?</h3>
                <p>
                    Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, 
                    a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, 
                    sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo. 
                </p>

                <div className = 'box-cards'>
                    <img src = 'assets/loja.png' alt = 'Imagem loja' />

                    <div className = 'card'>
                        <h3>Nossas Filiais</h3>
                        <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                    </div>

                    <div className = 'card'>
                        <h3>Atendimento flexível</h3>
                        <p>Nossa equipe possui é treinada para te atender</p>
                    </div>
                    
                    <img src = 'assets/atendimento.png' alt = 'Imagem atendimento' />
                </div>
                
            </div>
        </section>
    )
}