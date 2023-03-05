export default function CalcForm() {
    function imcCalc(weight: number, height: number) {
        const result = weight / Math.pow(height, 2)
        return result.toFixed(2)
    }

    function getSituation(imc: number) {
        let situation = ''
        if (imc < 18.5) situation = 'under'
        else if (imc >= 18.5 && imc < 25) situation = 'normal'
        else if (imc >= 25 && imc < 30) situation = 'over'
        else if (imc >= 30) situation = 'obese'

        return situation
    }

    return (
        <div className={'calcForm'}>
            <div className={'container'}>
                <form action="">
                    <input type="text" className="height" placeholder={'Digite a sua altura'} />
                    <input type="text" className="weight" placeholder={'Digite o seu peso'} />
                    <input
                        className={'calcButton'}
                        type={'button'}
                        value={'Calcular IMC'}
                        onClick={() => {
                            let blocks = document.querySelectorAll('.resultBlock')
                            for (let x of blocks) {
                                x.className = x.className.replace('selected', '')
                            }
                            let profile = {
                                height: (document.querySelector('.height') as HTMLInputElement).value,
                                weight: (document.querySelector('.weight') as HTMLInputElement).value
                            }
                            profile.height = profile.height.replace(',', '.')
                            profile.weight = profile.weight.replace(',', '.')
                            let imc = imcCalc(parseFloat(profile.weight), parseFloat(profile.height))
                            let situ = getSituation(parseFloat(imc))

                            let selected = document.querySelector(`.${situ}`)
                            selected.className += ' selected'
                        }}
                    />
                </form>
            </div>
        </div>
    )
}