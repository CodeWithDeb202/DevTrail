export default function SecurityTab(){

return(

<div className="bg-[#111827] rounded-2xl border border-white/10 p-6">

<h2 className="text-2xl font-bold mb-6">

Change Password

</h2>

<input

type="password"

placeholder="Current Password"

className="auth-input mb-4"

/>

<input

type="password"

placeholder="New Password"

className="auth-input mb-4"

/>

<input

type="password"

placeholder="Confirm Password"

className="auth-input"

/>

<button className="bg-blue-600 px-6 py-3 rounded-xl mt-6">

Update Password

</button>

</div>

)

}