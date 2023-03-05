import ResultBlock from "./ResultBlock"

export default function GridValues() {
    return (
        <div className={'gridValues'}>
            <div className={'row'}>
                <ResultBlock
                    position={1}
                    title={'Abaixo do peso'}
                    value={'abaixo de 18,5'}
                    img={'https://cdn-icons-png.flaticon.com/512/5559/5559962.png'}
                />
                <ResultBlock
                    position={2}
                    title={'Peso ideal'}
                    value={'entre 18,5 e 24,9'}
                    img={'https://cdn-icons-png.flaticon.com/512/5559/5559928.png'}
                />
            </div>
            <div className={'row'}>
                <ResultBlock
                    position={3}
                    title={'Pré obesidade'}
                    value={'entre 25 e 29,9'}
                    img={'https://cdn-icons-png.flaticon.com/512/5559/5559940.png'}
                />
                <ResultBlock
                    position={4}
                    title={'Obesidade'}
                    value={'a partir de 30'}
                    img={'https://cdn-icons-png.flaticon.com/512/5571/5571435.png'}
                />
            </div>
        </div>
    )
}