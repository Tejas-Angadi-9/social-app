import Image from "next/image";

const Comments = () => {
  return (
    <div>
      {/* Create a comment */}
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/16513086/pexels-photo-16513086/free-photo-of-close-up-of-moss-on-a-tree-branch.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="commentUserImage"
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
        />
        <div className="flex-1 flex items-center w-full bg-slate-100 rounded-xl text-sm px-6 py-2">
          <input
            type="text"
            placeholder="Write a comment...."
            className="bg-transparent outline-none flex-1"
          />
          <Image
            src="/emoji.png"
            alt="emoji"
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
      </div>
      {/* Displays all the comments */}
      <div className="mt-10">
        {/* COMMENT */}
        <div className="flex gap-2">
          {/* AVATAR */}
          <Image
            src="https://images.pexels.com/photos/16513086/pexels-photo-16513086/free-photo-of-close-up-of-moss-on-a-tree-branch.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="commentUserImage"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          {/* DESCRIPTION */}
          <div className="flex flex-col gap-2">
            {/* Username and Description with interaction container */}
            <div className="flex w-full justify-between items-center">
              <span className="font-medium">User name</span>
              {/* ICON */}
              <Image
                src="/more.png"
                alt="more"
                width={13}
                height={13}
                className="cursor-pointer"
              />
            </div>
            <p>
              Absolutely love the rich colors in this photo! 🍁 It’s amazing how
              nature’s palette can be so calming and inspiring. Do you have a
              favorite time of year to enjoy these beautiful tones? 🌟
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
