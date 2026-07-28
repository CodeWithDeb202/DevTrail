export default function AppearanceTab(){

return(

<div className="bg-[#111827] rounded-2xl border border-white/10 p-6">

<h2 className="text-2xl font-bold mb-6">

Appearance

</h2>

<div className="space-y-4">

<label className="flex items-center gap-3">

<input type="radio" name="theme"/>

Dark

</label>

<label className="flex items-center gap-3">

<input type="radio" name="theme"/>

Light

</label>

<label className="flex items-center gap-3">

<input type="radio" name="theme"/>

System

</label>

</div>

</div>

)

}