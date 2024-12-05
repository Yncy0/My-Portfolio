

type Props = {
    headerText: string,
    text: string,
    imgSource: string
}

export default function InfoCard({ headerText, text, imgSource }: Props) {
    return (
        <div className="flex flex-col items-center justify-center shadow-lg rounded-lg w-96 bg-white p-7 gap-4">
            <img className="w-36" src={imgSource} alt={imgSource} />
            <h1>{headerText}</h1>
            <p>{text}</p>
        </div>
    )
}