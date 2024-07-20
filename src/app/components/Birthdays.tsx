import Link from "next/link";
import Image from "next/image";

const FriendRequests = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* Title */}
      <div className="flex items-center justify-between font-medium">
        <span className="text-gray-500">Birthdays</span>
        <Link href="/" className="text-blue-500">
          See all
        </Link>
      </div>
      {/* Bottom part with image, username and accept or reject friend request */}
      <div className="flex flex-col gap-5">
        {/* User 1*/}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center justify-center gap-4">
            <Image
              src="https://images.pexels.com/photos/27272582/pexels-photo-27272582/free-photo-of-a-woman-in-a-black-top-and-denim-jacket.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
              alt="user1.png"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="font-semibold">User1</span>
          </div>
          {/* Celebrate button */}
          <div className="flex items-center justify-center gap-3">
            <button className="bg-blue-500 text-white rounded-md px-2 py-1 hover:scale-95 transition-all duration-200">
              Celebrate
            </button>
          </div>
        </div>
        {/* Upcoming birthdays */}
        <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4">
          <Image src="/gift.png" alt="user1.png" width={24} height={24} />
          <Link href="/" className="flex flex-col gap-1 text-xs">
            <span className="text-gray-700 font-semibold">
              Upcoming Birthdays
            </span>
            <span className="text-gray-500">
              See other 16 have upcoming birthdays
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FriendRequests;
