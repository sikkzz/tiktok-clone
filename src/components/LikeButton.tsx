import React, { useState, useEffect } from "react";
import Icons from "@/constants/icon";
import useAuthStore from "@/store/authStore";

interface IProps {
  handleLike: () => void;
  handleDislike: () => void;
  likes: any[];
}

const LikeButton = ({ likes, handleLike, handleDislike }: IProps) => {
  const [alreadyLiked, setAlreadyLiked] = useState(true);
  const { userProfile } = useAuthStore();
  const filterLikes = likes?.filter((item) => item._ref === userProfile?._id);

  useEffect(() => {
    if (filterLikes?.length > 0) {
      setAlreadyLiked(true);
    } else {
      setAlreadyLiked(false);
    }
  }, [filterLikes, likes]);

  return (
    <div className="flex gap-6">
      <div className="mt-4 flex flex-col justify-center items-center cursor-pointer">
        {alreadyLiked ? (
          <div
            className="bg-primary rounded-full p-2 md:p-4 text-[#F51997]"
            onClick={handleDislike}
          >
            <Icons.MdFavorite className="text-lg md:text-2xl" />
          </div>
        ) : (
          <div
            className="bg-primary rounded-full p-2 md:p-4"
            onClick={handleLike}
          >
            <Icons.MdFavorite className="text-lg md:text-2xl" />
          </div>
        )}
        <p className="text-md font-semibold">{likes?.length || 0}</p>
      </div>
    </div>
  );
};

export default LikeButton;
