import React from "react";
import { svgData } from "../../svg";
import { UseDataContext } from "../../context/Color";

const UserCard = () => {
  const { clicked, userData } = UseDataContext();
  return (
    <>
      {userData ? (
        <section className="flex justify-center items-center min-h-[80vh] sm:my-0 mx-[1rem] mt-[5rem] text-[#000000] dark:text-[#ffffff] dark">
          <div className="card-section flex justify-center items-center gap-[20px] t-p">
            <div
              style={{
                background: !clicked ? "black" : "#ffffff",
                color: clicked ? "#000" : "gray",
              }}
              className="user-info-container relative  dark:bg-slate-700 text-[#000000] dark:text-[#ffffff] border-[1px] border-[#d0d7de] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] p-[30px] max-w-[550px] flex flex-col justify-start items-start gap-[15px]"
            >
              <span
                style={{
                  background: !clicked ? "black" : "#ffffff",
                  color: clicked ? "#000" : "gray",
                }}
                className="user-type absolute top-[-38px] left-[-1px] bg-[#ffffff] dark:bg-slate-700 px-[15px] py-[5px] border-[1px] border-[#d0d7de] border-b-0 rounded-tl-[10px] rounded-tr-[10px] font-semibold text-[18px]"
              >
                {userData.type}
              </span>
              <small className="user-created absolute top-[7px] right-[12px] text-[11px]">
                Created at:{" "}
                {userData.created_at.slice(0, 10) || "Not Mentioned"}
              </small>
              <div className="user-info flex justify-start items-center gap-[15px]">
                <img
                  className="w-[100px] h-[100px] rounded-full border-[5px] border-[#dddede] dark:border-slate-400"
                  src={userData.avatar_url}
                  alt="avatar profile"
                />
                <div className="user-name">
                  <h2 className="user-h2-tag text-[24px]">
                    {userData.name || "Not Mentioned"}
                  </h2>
                  <div className="user-additional">
                    <a
                      href={userData.html_url}
                      target="__blank"
                      className="user-login user-p-tag text-[18px] flex justify-center items-center gap-[2px]"
                    >
                      <span
                        dangerouslySetInnerHTML={{ __html: svgData[0] }}
                      ></span>
                      {userData.login || "Not Mentioned"}
                      <span
                        dangerouslySetInnerHTML={{ __html: svgData[1] }}
                      ></span>
                    </a>
                  </div>
                </div>
              </div>
              <p className="user-p-tag text-[18px]">
                {userData.bio || "Not Mentioned"}
              </p>
              <div className="user-additional-container flex flex-col gap-[5px]">
                <div className="user-additional flex justify-start items-center gap-[5px]">
                  <span dangerouslySetInnerHTML={{ __html: svgData[2] }}></span>
                  <p>{userData.company || "Not Mentioned"}</p>
                </div>
                <div className="user-additional flex justify-start items-center gap-[5px]">
                  <span dangerouslySetInnerHTML={{ __html: svgData[3] }}></span>
                  <p>{userData.location || "Not Mentioned"}</p>
                </div>
                <div className="user-additional flex justify-start items-center gap-[5px]">
                  <span dangerouslySetInnerHTML={{ __html: svgData[4] }}></span>
                  <p>{userData.blog || "Not Mentioned"}</p>
                </div>
                <div className="user-additional flex justify-start items-center gap-[5px]">
                  <span dangerouslySetInnerHTML={{ __html: svgData[5] }}></span>
                  <p>{userData.email || "Not Mentioned"}</p>
                </div>
              </div>
            </div>
            <div className="user-cells-container flex flex-col justify-between gap-[22px]">
              <button
                style={{
                  background: !clicked ? "black" : "#ffffff",
                  color: clicked ? "#000" : "gray",
                }}
                target="__blank"
                className="user-cell flex justify-start items-center gap-[15px] bg-[#ffffff] dark:bg-slate-700 p-[10px] rounded-[10px] border-[1px] border-[d0d7de] w-[200px] text-[#000000] dark:text-[#ffffff] group"
              >
                <div className="cell-icons bg-gradient-to-b from-[#9d62f3] to-[#644ad1] group-hover:bg-gradient-to-t text-[#ffffff] h-[40px] w-[40px] rounded-full flex justify-center items-center my-0 mx-[10px] ">
                  <span dangerouslySetInnerHTML={{ __html: svgData[6] }}></span>
                </div>
                <div className="user-cell-titles">
                  <h3 className="text-[24px]">{userData.public_repos}</h3>
                  <p className="user-p-tag text-[18px]">Repositories</p>
                </div>
              </button>
              <button
                style={{
                  background: !clicked ? "black" : "#ffffff",
                  color: clicked ? "#000" : "gray",
                }}
                target="__blank"
                className="user-cell flex justify-start items-center gap-[15px] bg-[#ffffff] dark:bg-slate-700 p-[10px] rounded-[10px] border-[1px] border-[d0d7de] w-[200px] text-[#000000] dark:text-[#ffffff] group"
              >
                <div className="cell-icons bg-gradient-to-b from-[#9d62f3] to-[#644ad1] group-hover:bg-gradient-to-t text-[#ffffff] h-[40px] w-[40px] rounded-full flex justify-center items-center my-0 mx-[10px] ">
                  <span dangerouslySetInnerHTML={{ __html: svgData[9] }}></span>
                </div>
                <div className="user-cell-titles">
                  <h3 className="text-[24px]">{userData.public_gists}</h3>
                  <p className="user-p-tag text-[18px]">Gists</p>
                </div>
              </button>
              <button
                style={{
                  background: !clicked ? "black" : "#ffffff",
                  color: clicked ? "#000" : "gray",
                }}
                target="__blank"
                className="user-cell flex justify-start items-center gap-[15px] bg-[#ffffff] dark:bg-slate-700 p-[10px] rounded-[10px] border-[1px] border-[d0d7de] w-[200px] text-[#000000] dark:text-[#ffffff] group"
              >
                <div className="cell-icons bg-gradient-to-b from-[#9d62f3] to-[#644ad1] group-hover:bg-gradient-to-t text-[#ffffff] h-[40px] w-[40px] rounded-full flex justify-center items-center my-0 mx-[10px] ">
                  <span dangerouslySetInnerHTML={{ __html: svgData[7] }}></span>
                </div>
                <div className="user-cell-titles">
                  <h3 className="text-[24px]">{userData.followers}</h3>
                  <p className="user-p-tag text-[18px]">Followers</p>
                </div>
              </button>
            </div>
          </div>
        </section>
      ) : (
        <i
          style={{
            lineHeight: "0px",
            filter: "blur(0.5px)",
          }}
          className="fa-brands fa-github text-purple-500 text-[100px] pt-[11rem] "
        ></i>
      )}
    </>
  );
};

export default UserCard;
