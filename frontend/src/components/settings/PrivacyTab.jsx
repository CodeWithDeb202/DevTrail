export default function PrivacyTab(){

return(

<div className="bg-[#111827] rounded-2xl border border-white/10 p-6">

<h2 className="text-2xl font-bold mb-6">

Privacy

</h2>

<div className="space-y-5">

<label>

<input type="checkbox"/>

<span className="ml-3">

Public Profile

</span>

</label>

<label>

<input type="checkbox"/>

<span className="ml-3">

Public Projects

</span>

</label>

<label>

<input type="checkbox"/>

<span className="ml-3">

Public Timeline

</span>

</label>

</div>

</div>

)

}