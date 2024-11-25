import TuitPic from "../../../../assets/tuit.png";
const Profile = () => {
  return (
    <>
      <div className="w-[1110px] max-w-full px-4 pt-[60px] mx-auto">
        <h3 className="text-[20px] font-semibold tracking-[1px]">Profile</h3>
        <img
          className="pt-[30px] mx-auto"
          src={TuitPic}
          alt="Tuit"
          width={150}
          height={150}
        />
        <p className="w-[350px] text-center mx-auto pt-[20px] text-[20px] font-medium">
          Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari
          universiteti{" "}
        </p>
        <p className="w-[700px] text-justify mx-auto pt-4 text-[18px]">
          Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari
          universiteti (TATU) Oʻzbekistondagi yetakchi axborot texnologiyalari
          universitetlaridan biri hisoblanadi. Universitet
          axborot-kommunikatsiya texnologiyalari sohasida yuqori malakali
          mutaxassislarni tayyorlashga qaratilgan.
        </p>
      </div>
    </>
  );
};

export default Profile;
