import getSongsByTitle from "@/actions/getSongsByTitle";
import Header from "../components/Header";
import SearchInput from "../components/SearchInput";
import SearchContent from "./components/SearchComponent";

interface SearchProps {
    searchParams: {
        title: string
    }
};

export const revalidate = 0;

const Search = async ({ searchParams } : SearchProps) => {
    const song = await getSongsByTitle(searchParams.title);

    return (
        <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-hidden">
            <Header classname="from-bg-neutral-900">
                <div className="flex mb-2 flex-col gap-y-6">
                    <h1 className="text-white text-3xl font-semibold">
                        Search
                    </h1>
                    <SearchInput />
                </div>
            </Header>
            <SearchContent songs={song} />
        </div>
    )
};

export default Search;