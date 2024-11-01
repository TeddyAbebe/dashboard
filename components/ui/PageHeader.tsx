"use client";

import { TiArrowBack } from "react-icons/ti";
import { useRouter } from "next/navigation";

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="bg-white px-10 py-5 flex items-center gap-2">
      <button onClick={handleBack}>
        <TiArrowBack size={24} />
      </button>

      <h1 className="font-bold text-xl">{title}</h1>
    </div>
  );
};

export default PageHeader;
