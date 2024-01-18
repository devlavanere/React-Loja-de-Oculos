import SecaoCapa from '../SecaoCapa/';
import SecaoSobre from '../SecaoSobre/';
import SecaoProduto from '../SecaoProduto/';
import SecaoContato from '../SecaoContato/';

export default function Conteudo(){
    return(
        <main>
            <SecaoCapa />
            <SecaoProduto />
            <SecaoSobre />
            <SecaoContato />
        </main>
    )
}
