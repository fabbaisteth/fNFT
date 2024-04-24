import Link from "next/link";
import IPFSUrl from "./public/BenjaminFranklinArch.png"

export default function NFTTile(data: any) {

    const GetIpfsUrlFromPinata = (pinataUrl: any) => {
        var IPFSUrl = pinataUrl.split("/");
        const lastIndex = IPFSUrl.length;
        IPFSUrl = "https://ipfs.io/ipfs/" + IPFSUrl[lastIndex - 1];
        return IPFSUrl;
    };

    const IPFSUrl = "./public/BenjaminFranklinArch.png";

    return (
        <Link href="/">
            <div className="border-2 ml-12 mt-5 mb-12 flex flex-col items-center rounded-lg w-48 md:w-72 shadow-2xl">
                <img src="./public/BenjaminFranklinArch.png" alt="" className="w-72 h-80 rounded-lg object-cover" crossOrigin="anonymous" />
                <div className="text-white w-full p-2 bg-gradient-to-t from-[#454545] to-transparent rounded-lg pt-5 -mt-20">
                    <strong className="text-xl">{data.data.name}</strong>
                    <p className="display-inline">
                        {data.data.description}
                    </p>
                </div>
            </div>
        </Link>
    )
}