export default function ProgressCard() {

    const progress = 65;


    return (

        <div className="
bg-[#111827]
border
border-white/10
rounded-2xl
p-6
">


            <h2 className="
text-white
font-semibold
">

                Overall Progress

            </h2>


            <div className="
mt-5
h-3
bg-gray-700
rounded-full
overflow-hidden
">


                <div

                    className="
h-full
bg-blue-500
rounded-full
"

                    style={{
                        width: `${progress}%`
                    }}

                />


            </div>


            <p className="
text-gray-400
mt-3
">

                {progress}% completed

            </p>


        </div>

    )

}