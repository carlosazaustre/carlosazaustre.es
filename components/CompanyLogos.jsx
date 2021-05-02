import Image from "next/image";

export const CompanyLogos = () => {
  return (
    <div className="logos">
      <style jsx>{`
        .logos {
          max-width: 500px;
          text-align: center;
          display: flex;
          flex-direction: column;
        }
        .logosRow {
          display: flex;
          flex-direction: row;
          text-align: center;
          justify-content: space-around;
          padding: 1rem;
          align-content: center;
        }
      `}</style>
      <div className="logosRow">
        <Image
          layout="fixed"
          width={175}
          height={31}
          src="/assets/eb-logo.png"
        />
        <Image
          layout="fixed"
          width={115}
          height={38}
          src="/assets/google-logo.png"
        />
      </div>
      <div className="logosRow">
        <Image
          layout="fixed"
          width={113}
          height={45}
          src="/assets/ibm-logo.png"
        />
        <Image
          layout="fixed"
          width={137}
          height={57}
          src="/assets/chefly-logo.png"
        />
      </div>
    </div>
  );
};
