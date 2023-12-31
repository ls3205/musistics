"use client";

import { User } from "next-auth";
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "../ui/Tabs";
import TopArtists from "@/components/TopArtists";
import TopSongs from "@/components/TopSongs";
import RecentlyPlayed from "@/components/RecentlyPlayed";

interface TopArtistsPageProps {
    user: Pick<User, "name" | "image" | "email" | "accessToken">;
}

const TopArtistsPage: React.FC<TopArtistsPageProps> = ({ user }) => {
    const [dataRange, setDataRange] = useState<
        "short_term" | "medium_term" | "long_term"
    >("short_term");

    return (
        <>
            <Tabs
                defaultValue={dataRange}
                className="z-50 mx-2 flex h-full min-w-[95%] flex-col 2xl:mb-2 2xl:flex-row"
            >
                <TabsList className="fixed bottom-0 left-0 w-full rounded-b-none bg-neutral-100 dark:bg-neutral-900">
                    <TabsTrigger
                        value="short_term"
                        className="rounded-md hover:bg-neutral-200 data-[state=active]:text-green-500 dark:hover:bg-neutral-800 dark:data-[state=active]:text-green-500"
                        onClick={() => setDataRange("short_term")}
                    >
                        4 Weeks
                    </TabsTrigger>
                    <TabsTrigger
                        value="medium_term"
                        className="rounded-md hover:bg-neutral-200 data-[state=active]:text-green-500 dark:hover:bg-neutral-800 dark:data-[state=active]:text-green-500"
                        onClick={() => setDataRange("medium_term")}
                    >
                        6 Months
                    </TabsTrigger>
                    <TabsTrigger
                        value="long_term"
                        className="rounded-md hover:bg-neutral-200 data-[state=active]:text-green-500 dark:hover:bg-neutral-800 dark:data-[state=active]:text-green-500"
                        onClick={() => setDataRange("long_term")}
                    >
                        Lifetime
                    </TabsTrigger>
                </TabsList>
            </Tabs>

            <div className="mx-2 mb-2 flex h-full min-w-[95%] max-w-[95%] flex-col items-center xl:min-w-[66.66%] xl:max-w-[66.66%]">
                <TopArtists
                    dataRange={dataRange}
                    user={user}
                    mobileAccessible={false}
                    className="w-full"
                    dataLength={50}
                />
            </div>
        </>
    );
};

export default TopArtistsPage;
