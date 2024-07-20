import Link from "next/link";
import Image from "next/image";

const FriendRequests = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* Title */}
      <div className="flex items-center justify-between font-medium">
        <span className="text-gray-500">Friend Requests</span>
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
          {/* 2 icons accept and reject */}
          <div className="flex items-center justify-center gap-3">
            <Image
              src="/accept.png"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"></Image>
            <Image
              src="/reject.png"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"></Image>
          </div>
        </div>
        {/* User 2*/}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center justify-center gap-4">
            <Image
              src="https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="user1.png"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="font-semibold">User2</span>
          </div>
          {/* 2 icons accept and reject */}
          <div className="flex items-center justify-center gap-3">
            <Image
              src="/accept.png"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"></Image>
            <Image
              src="/reject.png"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"></Image>
          </div>
        </div>
        {/* User 3*/}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center justify-center gap-4">
            <Image
              src="https://images.pexels.com/photos/1759531/pexels-photo-1759531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="user3.png"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="font-semibold">User3</span>
          </div>
          {/* 2 icons accept and reject */}
          <div className="flex items-center justify-center gap-3">
            <Image
              src="/accept.png"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"></Image>
            <Image
              src="/reject.png"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendRequests;
