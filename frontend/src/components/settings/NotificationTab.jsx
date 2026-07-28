export default function NotificationTab(){

return(

<div className="bg-[#111827] rounded-2xl border border-white/10 p-6">

<h2 className="text-2xl font-bold mb-6">

Notifications

</h2>

<div className="space-y-5">

<label>

<input type="checkbox"/>

<span className="ml-3">

Email Notifications

</span>

</label>

<label>

<input type="checkbox"/>

<span className="ml-3">

Weekly Report

</span>

</label>

<label>

<input type="checkbox"/>

<span className="ml-3">

Build Reminder

</span>

</label>

</div>

</div>

)

}