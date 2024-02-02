type ResultRowProps = {
    loading: boolean;
};

export default function ResultRow(props: ResultRowProps) {
    return (
        <div className="overflow-hidden relative border min-h-12 boder-white/40 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-4 my-2" >
            <div className="flex gap-4">
                <div>logo</div>
                <div className="grow">provider name</div>
                <div className="flex gap-2">
                    <span className="text-xl text-purple-200/80">0.000</span>
                    <span className="text-xl text-purple-300/50">BTC</span>
                </div>
            </div>
            {props.loading && (
                <div className="inset-0 absolute bg-gradient-to-r from-transparent via-blue-800 to-transparent skeleton-animation"/>
            )}
        </div >
    );
}
