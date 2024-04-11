export function VideoCard(props: any) {
    return <div className="p-10">
        
            <img className="rounded-xl" src={props.thumbImage} alt="" />
            <div className="grid grid-cols-12 pt-5">
                <div className="col-span-1">
                    <img className="rounded-full" src={props.profileImage} alt="" />
                </div>
                <div className="col-span-10">
                    <div>
                        {props.title}
                    </div>
                    <div className="col-span-11 text-gray-400 text-sm">
                        {props.author}
                    </div>
                    <div className="col-span-11 text-gray-400 text-sm">
                        {props.views} | {props.timestamp}
                    </div>

                </div>

            </div>
    </div>
}