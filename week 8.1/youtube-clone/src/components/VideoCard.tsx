export function VideoCard(props: any) {
    return <div className="p-5">
        
            <img className="rounded-xl w-full cursor-pointer" src={props.thumbImage} alt="" />
            <div className="grid grid-cols-12 pt-5 cursor-pointer">
                <div className="col-span-1">
                    <img className="rounded-full" src={props.profileImage} alt="" />
                </div>
                <div className="col-span-11 ml-3">
                    <div className="">
                        {props.title}
                    </div>
                    <div className="text-gray-400 text-xs pt-1">
                        {props.author}
                    </div>
                    <div className="text-gray-400 text-xs">
                        {props.views} | {props.timestamp}
                    </div>

                </div>

            </div>
    </div>
}