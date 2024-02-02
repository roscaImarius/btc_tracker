import Input, { InputProps } from "./Input"



export default function AmountIntput(props: InputProps) {
    return (
        <div className="bg-blue-950 flex items-center border border-white/10 rounded-lg overflow-hidden">
            <Input
                placeholder="Amount"
                className="border-0 text-xl w-24"
                value={props.value} onChange={props.onChange} />
            <span className="text-white/50 px-4"> USD </span>

        </div>
    )
}
