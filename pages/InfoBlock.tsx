export default function InfoBlock() {
    return (
        <div className={'infoBlock'}>
            <div className={'outterContainer'}>
                <div className={'centerContainer'}>
                    <h1>O que é IMC</h1>
                    <p>
                        IMC é a sigla para Índice de Massa Corporal.
                        É um cálculo simples que permite medir se alguém está ou não com o peso ideal.
                        Ele aponta se o peso está adequado ou se está abaixo ou acima do peso.
                    </p>
                </div>
                <input type="button" value="Fechar" onClick={() => {
                    (document.querySelector('.infoBlock') as HTMLInputElement).style.visibility = "hidden"
                }} />
            </div>
        </div>
    )
}