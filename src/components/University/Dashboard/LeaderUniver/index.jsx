import { MdOutlineAddCircleOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setModalLeader } from "../../../../redux/modalSlice";
const LeaderUniver = () => {
  const dispatch = useDispatch();
  const { valuesLeader } = useSelector((state) => state.values || []);

  return (
    <>
      <div className="w-[1110px] max-w-full px-4 pt-[60px] mx-auto">
        <div className="w-[100%] flex justify-end">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2"
            onClick={() => dispatch(setModalLeader())}
          >
            <MdOutlineAddCircleOutline className="text-[25px]" />
            Add Leader
          </button>
        </div>
        <div><h2>{valuesLeader.date}</h2></div>
      </div>
    </>
  );
};

export default LeaderUniver;
