export default function ResultBlock(props: { position: number, title: string, value: string, img: string }) {

    let theme = ''
    if (props.position == 1) theme = 'under'
    else if (props.position == 2) theme = 'normal'
    else if (props.position == 3) theme = 'over'
    else theme = 'obese'

    return (
        <div className={`resultBlock ${theme}`}>
            <img src={props.img} alt="" />
            <h4>{props.title}</h4>
            <p>{props.value}</p>
        </div>
    )
}