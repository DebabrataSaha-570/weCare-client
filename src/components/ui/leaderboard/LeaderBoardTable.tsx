type TRanking = {
  donorName: string;
  totalDonation: number;
  image?: string;
};

type LeaderBoardTableProps = {
  ranking: TRanking;
  index: number;
};

const LeaderBoardTable = ({ ranking, index }: LeaderBoardTableProps) => {
  //   console.log("ranking", ranking);
  const { donorName, totalDonation, image } = ranking;
  return (
    <tr className="text-base font-semibold">
      <td>{index + 1} </td>
      <td className="flex items-center gap-3">
        {" "}
        <div className="avatar">
          <div className="w-16 rounded-full">
            <img src={image} />
          </div>
        </div>{" "}
        <h3>{donorName}</h3>
      </td>
      <td>{totalDonation}</td>
    </tr>
  );
};

export default LeaderBoardTable;
