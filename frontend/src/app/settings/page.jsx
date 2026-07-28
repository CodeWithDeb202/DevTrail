"use client";

import { useState } from "react";

import Sidebar from "@/components/settings/Sidebar";
import AccountTab from "@/components/settings/AccountTab";
import SecurityTab from "@/components/settings/SecurityTab";
import AppearanceTab from "@/components/settings/AppearanceTab";
import NotificationTab from "@/components/settings/NotificationTab";
import PrivacyTab from "@/components/settings/PrivacyTab";
import DeleteAccountTab from "@/components/settings/DeleteAccountTab";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function SettingsPage() {

    const [tab, setTab] = useState("account");

    return (

        <div className="min-h-screen bg-[#030712] text-white p-6">

            <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition mb-2"
            >
                <ArrowLeft size={22} />
                <span>Back to Dashboard</span>
            </Link>

            <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-6">

                <Sidebar tab={tab} setTab={setTab} />

                <div className="lg:col-span-3">

                    {tab === "account" && <AccountTab />}

                    {tab === "security" && <SecurityTab />}

                    {tab === "appearance" && <AppearanceTab />}

                    {tab === "notification" && <NotificationTab />}

                    {tab === "privacy" && <PrivacyTab />}

                    {tab === "delete" && <DeleteAccountTab />}

                </div>

            </div>

        </div>

    )

}