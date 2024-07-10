
interface TextType{
    text: string
}
export default function Button({text}: TextType) {
    return (
        <div className="max-w-72 flex justify-center mt-5">
            <button className="bg-blue-500 px-12 py-2 text-white rounded-lg mt-4 hover:bg-blue-400" type="submit">{text}</button>
        </div>
    )
}