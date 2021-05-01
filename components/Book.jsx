import Image from "next/image";
import Link from "next/link";

export const Book = ({ imageSrc, url }) => {
  return (
    <>
      <style jsx>{`
        .book {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          height: 100%;
        }
        .book img:hover {
          margin-bottom: 10px;
        }
      `}</style>
      <Link href={url}>
        <a className="book">
          <Image width={500} height={720} layout="fixed" src={imageSrc} />
        </a>
      </Link>
    </>
  );
};
