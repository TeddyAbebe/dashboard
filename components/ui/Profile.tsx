import Image from "next/image";
import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

interface ProfileProps {
  name: string;
  role: string;
  img: string;
}

const Profile: React.FC<ProfileProps> = ({ name, role, img }) => {
  return (
    <div className="flex items-center gap-3 cursor-pointer">
      <div className="w-8 h-8">
        <Image
          src={img}
          alt="Profile Image"
          className="w-full h-full object-contain"
          width={50}
          height={50}
        />
      </div>

      <div>
        <p className="text-xs font-medium">{name}</p>
        <p className="text-[10px]">{role}</p>
      </div>

      <div>
        <MdKeyboardArrowDown />
      </div>
    </div>
  );
};

export default Profile;
