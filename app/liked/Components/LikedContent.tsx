'use client'
import MedialItem from "@/app/components/MedialItem";
import LikeButton from "@/app/search/components/LikeButton";
import useOnPlay from "@/hooks/useOnPlay";
import { useUser } from "@/hooks/useUser";
import { Song } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface LikedContentProps {
    songs: Song[];
}

const LikedContent: React.FC<LikedContentProps> = ({ songs }) => {
    const router = useRouter();
    const onplay = useOnPlay(songs);    
    const { isLoading, user } = useUser();

    useEffect(() => {
        if (!isLoading && !user) {
            router.replace('/');
        }
    }, [isLoading, user, router]);

    if (songs.length === 0) {
        return (
            <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-400">
                <p>No liked songs. <br/> amount: {songs.length}</p>
            </div>
        )
    }

    return (
    <div className="flex flex-col gap-y-2 w-full px-6">
        {songs.map((song) =>(
            <div key={song.id} className="flex items-center gap-x-4 w-full">
                <div className="flex-1">
                    <MedialItem onClick={(id: string) => onplay(id)} data={song} />
                </div>
                <LikeButton songId={song.id} />
            </div>
        ))}
    </div>
    )
};

export default LikedContent;
