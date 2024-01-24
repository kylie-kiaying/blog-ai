import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  className?: string;
  imageHeight: string;
  isSmallCard?: boolean;
  isLongForm?: boolean;
};

const Card = ({
  className,
  imageHeight,
  isSmallCard = false,
  isLongForm = false,
}: Props) => {

  const date = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" } as any;
  const formattedDate = date.toLocaleDateString("en-US", options);

  return (
    <div className={className}>
        <div className={`relative w-auto mb-3 ${imageHeight}`}>
          Image
        </div>
      <div className="basis-full">
          <h4
            className={`font-bold hover:text-accent-green
            ${isSmallCard ? "text-base" : "text-lg"}
            ${isSmallCard ? "line-clamp-2" : ""}
          `}
          >
            Title
          </h4>

        <div className={`${isSmallCard ? "my-2" : "flex my-3"} gap-3`}>
          <h5 className="font-semibold text-xs">Author</h5>
          <h6 className="text-wh-300 text-xs">Date</h6>
        </div>
        <p
          className={`text-wh-500 ${
            isLongForm ? "line-clamp-5" : "line-clamp-3"
          }`}
        >
        </p>
      </div>
    </div>
  );
};

export default Card;