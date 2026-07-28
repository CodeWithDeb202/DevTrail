export default function DeleteAccountTab(){

return(

<div className="bg-[#111827] rounded-2xl border border-red-500/30 p-6">

<h2 className="text-2xl font-bold text-red-500">

Delete Account

</h2>

<p className="text-gray-400 mt-3">

This action cannot be undone.

</p>

<input

type="password"

placeholder="Enter Password"

className="auth-input mt-6"

/>

<button

className="bg-red-600 px-6 py-3 rounded-xl mt-6"

>

Delete Account

</button>

</div>

)

}