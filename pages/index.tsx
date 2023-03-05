import CalcForm from "./CalcForm"
import GridValues from "./GridValues"

export default function Home() {
    return (
        <>
            <div className={'home'}>
                <div className={'col'}>
                    <CalcForm />
                </div>
                <div className={'col'}>
                    <GridValues />
                </div>
            </div>
            <footer>
                <a href="https://www.flaticon.com/br/icones-gratis/abaixo-do-peso" title="abaixo-do-peso ícones">Abaixo-do-peso ícones criados por Freepik - Flaticon</a>
                <a href="https://www.flaticon.com/br/icones-gratis/normal" title="normal ícones">Normal ícones criados por Freepik - Flaticon</a>
                <a href="https://www.flaticon.com/br/icones-gratis/excesso-de-peso" title="excesso-de-peso ícones">Excesso-de-peso ícones criados por Freepik - Flaticon</a>
                <a href="https://www.flaticon.com/br/icones-gratis/obesidade" title="obesidade ícones">Obesidade ícones criados por surang - Flaticon</a>
            </footer>
        </>
    )
}