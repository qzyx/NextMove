import { Award, Calendar, Clock, Users } from "lucide-react";

export default function LoggedIn({ localUserProfile }) {
  if (localUserProfile === null) return null;
  console.log(localUserProfile);
  // Function to convert seconds to MM:SS format

  function formatDate(dateInput) {
    if (!dateInput) return "N/A";

    const date = new Date(dateInput);

    if (isNaN(date.getTime())) return "Invalid date";

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}:${month}:${year}`;
  }
  return (
    <>
      <div className="flex items-center gap-4 text-sm sm:text-xl ">
        <img
          src={
            localUserProfile.avatar_url !== ""
              ? localUserProfile.avatar_url
              : "NotSetPfp.jpg"
          }
          className="h-12   rounded-full"
        ></img>
        <span className="text-xl">{localUserProfile.username}</span>
      </div>
      <div className="flex items-center text-lg gap-1  sm:gap-4 ">
        <span className="flex items-center">
          <span className="mx-2">•</span>
          <span className="gap-2 flex">
            {localUserProfile.elo}
            <span className="text-gray-300">ELO</span>
          </span>
        </span>
        <span className="flex items-center">
          <Award color="gold"></Award>
          <span>
            {localUserProfile.rank !== 0 ? (
              `#${localUserProfile.rank}`
            ) : (
              <span className="tracking-widest text-sm text-gray-300">
                Unranked
              </span>
            )}
          </span>
        </span>
      </div>
      <div className="flex sm:gap-4 sm:items-center ml-4 sm:ml-0 flex-col sm:flex-row gap-2">
        <div className="flex gap-3 items-center">
          <span>
            <Calendar></Calendar>
          </span>
          <span className="flex flex-col ">
            <span className="text-sm text-gray-300 hidden sm:inline-block">
              Member Since
            </span>
            <span>{formatDate(localUserProfile.created_at)}</span>
          </span>
        </div>
        <div className="flex gap-3 items-center">
          <span>
            <Clock></Clock>
          </span>
          <span className="flex flex-col ">
            <span className="text-sm text-gray-300 hidden sm:inline-block">
              Average Playtime
            </span>
            <span>
              {localUserProfile.average_playtime ? (
                localUserProfile.average_playtime
              ) : (
                <span className="text-sm ">no data found</span>
              )}
            </span>
          </span>
        </div>
        <div className="flex gap-3 items-center">
          <span>
            <Users></Users>
          </span>
          <span className="flex flex-col">
            <span className="text-sm text-gray-300 hidden sm:inline-block">
              Total Games
            </span>
            <span>{localUserProfile.total_games}</span>
          </span>
        </div>
      </div>
    </>
  );
}
