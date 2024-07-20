import Image from "next/image";

const Ad = ({ size }: { size: "sm" | "md" | "lg" }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
      {/* Top */}
      <div className="flex items-center justify-between text-gray-500 font-medium">
        <span>Sponsored Ads</span>
        <Image
          src="/more.png"
          alt="more.png"
          width={16}
          height={16}
          className="cursor-pointer"
        />
      </div>
      {/* Bottom */}
      <div
        className={`flex flex-col mt-4 ${
          size === "sm" ? "gap-2" : "gap-4"
        } w-full`}>
        <div
          className={`relative w-full ${
            size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-46"
          }`}>
          <Image
            src="https://images.pexels.com/photos/7319125/pexels-photo-7319125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="ad.png"
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/7319125/pexels-photo-7319125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="ad.png"
            width={24}
            height={24}
            className="rounded-full w-6 h-6 object-cover"
          />
          <span className="text-blue-500 font-medium mt-2">Ad 1</span>
        </div>
        <p className={size === "sm" ? "text-xs" : "text-sm"}>
          {size === "sm"
            ? "Elevate your style! 🌟 Discover chic designs and premium materials. Shop now for timeless elegance! #FashionForward #ShopNow"
            : size === "md"
            ? "Elevate your style with our new collection! 🌟 Premium materials and chic designs for every occasion. Shop now for timeless elegance! #FashionForward #ShopNow"
            : "Elevate your style with our new collection! 🌟 Premium materials and chic designs for every occasion. Shop now and add timeless elegance to your wardrobe! #FashionForward #ShopNow"}
        </p>
        <button className="bg-gray-200 text-gray-500 p-2 text-xs rounded-lg">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default Ad;
