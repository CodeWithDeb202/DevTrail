export default function AccountTab(){

return(

<div className="bg-[#111827] rounded-2xl border border-white/10 p-6">

<h2 className="text-2xl font-bold mb-6">

Account Settings

</h2>

<div className="grid md:grid-cols-2 gap-5">

<input placeholder="Full Name" className="auth-input"/>

<input placeholder="Username" className="auth-input"/>

<input placeholder="Email" className="auth-input"/>

<input placeholder="Location" className="auth-input"/>

<input placeholder="GitHub URL" className="auth-input"/>

<input placeholder="LinkedIn URL" className="auth-input"/>

</div>

<textarea

placeholder="Bio"

className="auth-input mt-5 min-h-32"

/>

<button className="bg-blue-600 px-6 py-3 rounded-xl mt-6">

Save Changes

</button>

</div>

)

}