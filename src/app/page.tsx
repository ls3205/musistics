import HomePage from "@/components/HomePage/HomePage";
import UserInfoPanel from "@/components/HomePage/UserInfoPanel";
import Navbar from "@/components/Navbar";
import { getAuthSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Home() {
    const session = await getAuthSession();

    return session && session.user ? (
        <main className="flex min-h-screen min-w-[400px] flex-col items-center bg-white pb-10 text-black subpixel-antialiased dark:bg-black dark:text-white">
            <Navbar user={session.user} />
            <UserInfoPanel user={session.user} />
            <HomePage user={session.user} />
        </main>
    ) : (
        redirect("/sign-in")
    );
}
