import { Link } from "react-router-dom";

export default function Component({ title, info, img }) {



    return (

        <div className="bg-slate-900/60 hover:bg-gray-600/90 m-1 p-2 border   border-gray-600 rounded-lg">

            <Link to={`/country/${title.toLowerCase()}`}>

                <p className="text-xl font-semibold text-gray-300 mb-1">
                    {title}
                </p>
                <div className=" flex flex-col-reverse gap-2 md:flex-row items-center justify-between">
                    <div >

                        {info}

                    </div>

                    <img width={100} height="auto" src={img} alt={title} />

                </div>
            </Link>
        </div>


    );
}
