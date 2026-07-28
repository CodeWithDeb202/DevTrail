export default function LogSearch({

search,

setSearch

}){

return(

<input

value={search}

onChange={(e)=>setSearch(e.target.value)}

placeholder="Search logs..."

className="auth-input"

/>

)

}