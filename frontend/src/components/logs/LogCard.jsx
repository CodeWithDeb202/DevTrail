export default function LogCard({ log }) {


    return (

        <div className="
bg-[#111827]
border
border-white/10
rounded-2xl
p-5
">


            <h3 className="
text-xl
font-bold
text-white
">

                {log.title}

            </h3>


            <p className="
text-gray-400
mt-2
">

                {log.description}

            </p>


            {
                log.image &&

                <img

                    src={log.image}

                    className="
mt-4
rounded-xl
"

                />

            }


            <p className="
text-sm
text-gray-500
mt-4
">

                {
                    new Date(log.date)
                        .toDateString()
                }

            </p>


        </div>

    )

}