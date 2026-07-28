export default function LogFilter({

filter,

setFilter

}){

return(

<select

value={filter}

onChange={(e)=>setFilter(e.target.value)}

className="auth-input"

>

<option>All</option>

<option>Planning</option>

<option>Development</option>

<option>Testing</option>

<option>Deployment</option>

<option>Completed</option>

</select>

)

}