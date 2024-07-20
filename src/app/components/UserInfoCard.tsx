import Image from "next/image";
import Link from "next/link";

const UserInfoCard = ({ userId }: { userId: string }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* Title */}
      <div className="flex items-center justify-between font-medium">
        <span className="text-gray-500">User Information</span>
        <Link href="/" className="text-blue-500">
          See all
        </Link>
      </div>
      {/* Bottom info */}
      <div className="flex flex-col gap-4 text-gray-400">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">Lloyd Fleming</span>
          <span className="text-sm">@llyod</span>
        </div>
        <p>
          Dynamic professional | Innovation & strategy | Thrives on challenges |
          Lifelong learner
        </p>
        <div className="flex items-center gap-2">
          <Image src="/map.png" alt="city.png" height={16} width={16} />
          <span>
            Living in <b>Los Angeles</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/school.png" alt="city.png" height={16} width={16} />
          <span>
            Went to <b>UCLA</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/work.png" alt="city.png" height={16} width={16} />
          <span>
            Works at <b>Apple Inc.</b>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <Image src="/link.png" alt="" width={16} height={16} />
            <Link href="https://lama.dev" className="text-blue-500 font-medium">
              lama.dev
            </Link>
          </div>
          {/* Date */}
          <div className="flex gap-1 items-center">
            <Image src="/date.png" alt="date.png" width={16} height={16} />
            <span>Joined November 2024</span>
          </div>
        </div>
        <button className="bg-blue-500 text-white px-2 py-1 text-sm rounded-md">
          Follow
        </button>
        <span className="text-red-400 self-end text-xs cursor-pointer">
          Block User
        </span>
      </div>
    </div>
  );
};

export default UserInfoCard;
