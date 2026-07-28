const menus=[
["account","Account"],
["security","Security"],
["appearance","Appearance"],
["notification","Notifications"],
["privacy","Privacy"],
["delete","Delete Account"]
];

export default function Sidebar({tab,setTab}){

return(

<div className="bg-[#111827] rounded-2xl border border-white/10 p-4">

{menus.map(([key,label])=>(

<button

key={key}

onClick={()=>setTab(key)}

className={`

w-full

text-left

px-4

py-3

rounded-xl

mb-2

transition

${tab===key

?"bg-blue-600"

:"hover:bg-white/5"

}

`}

>

{label}

</button>

))}

</div>

)

}