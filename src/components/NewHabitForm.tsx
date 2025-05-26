export const NewHabitForm = () => {
    return (
        <div className="flex flex-col items-center gap-3 bg-blue-500 p-5">
            <input className="border-2 rounded-sm px-2" type="text" placeholder="New habit" />
            <div className="flex w-full gap-5">
                <div className="flex justify-center cursor-pointer gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full block ring-green-600 hover:ring-2 ring-offset-1" ></div>
                    <div className="w-8 h-8 bg-red-500 rounded-full block ring-red-600 hover:ring-2 ring-offset-1" ></div>
                    <div className="w-8 h-8 bg-orange-500 rounded-full block ring-orange-600 hover:ring-2 ring-offset-1" ></div>
                    <div className="w-8 h-8 bg-yellow-500 rounded-full block ring-yellow-600 hover:ring-2 ring-offset-1" ></div>
                    <div className="w-8 h-8 bg-purple-500 rounded-full block ring-purple-600 hover:ring-2 ring-offset-1" ></div>
                </div>
                <button className="border-2 rounded-md px-6 cursor-pointer">Add +</button>
            </div>
        </div>
    )
}