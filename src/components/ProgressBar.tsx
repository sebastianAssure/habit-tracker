export const ProgressBar = () => {
    return (
        <div className="flex w-full justify-around py-4 gap-2">
            <div className="w-50 bg-stone-200 block overflow-hidden h-4">
                <div className="h-full w-full rounded-none bg-stone-800" style={{ width: '40%' }}></div>
            </div>
            <p>2/7 days completed</p>
        </div>
    )
}