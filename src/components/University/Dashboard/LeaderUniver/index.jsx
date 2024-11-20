import { MdOutlineAddCircleOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setModalLeader } from "../../../../redux/modalSlice";
import { setValuesLeader } from "../../../../redux/valuesSlice";
import { useEffect, useState } from "react";
import { supabase } from "../../../../tools/supabaseClient";

const LeaderUniver = () => {
  const dispatch = useDispatch();
  const valuesLeader = useSelector((state) => state.values.valuesLeader || []);
  const modalLeader = useSelector((state) => state.modal.modalLeader);

  const [isUpdated, setIsUpdated] = useState(false);
  const fetchData = async () => {
    try {
      const { data, error } = await supabase
        .from("create_leader_info")
        .select("*");
      if (error) throw error;
      dispatch(setValuesLeader(data));
      setIsUpdated(false);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const handleDelete = async (id) => {
    // Ma'lumotni o'chirish funksiyasi
    try {
      const { error } = await supabase
        .from("create_leader_info")
        .delete()
        .eq("id", id);
      if (error) throw error;
      fetchData();
      alert("User deleted successfully!");
    } catch (error) {
      console.error("Error deleting user:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [modalLeader, isUpdated]);
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
        <div className="overflow-x-auto pt-[50px]">
          <table className="min-w-full border border-gray-300 text-left">
            <thead className="bg-stone-50 whitespace-nowrap border border-gray-500">
              <tr>
                <th className="py-2 px-4  border border-gray-500">#</th>
                <th className="py-2 px-4  border border-gray-500">
                  First Name
                </th>
                <th className="py-2 px-4  border border-gray-500">Last Name</th>
                <th className="py-2 px-4  border border-gray-500">
                  Father{"'"}s Name
                </th>
                <th className="py-2 px-4  border border-gray-500">
                  Date of Birth
                </th>
                <th className="py-2 px-4  border border-gray-500">Gender</th>
                <th className="py-2 px-4  border border-gray-500">Specialty</th>
                <th className="py-2 px-4  border border-gray-500">Level</th>
                <th className="py-2 px-4  border border-gray-500">Location</th>
                <th className="py-2 px-4  border border-gray-500">Phone</th>
                <th className="py-2 px-4  border border-gray-500">
                  Attached Group
                </th>
                <th className="py-2 px-4  border border-gray-500">Login</th>
                <th className="py-2 px-4  border border-gray-500">Password</th>
                <th className="py-2 px-4  border border-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-[#fff]">
              {valuesLeader.map((user, index) => (
                <tr
                  key={user.id}
                  className="hover:bg-gray-50 whitespace-nowrap"
                >
                  <td className="py-2 px-4  border border-gray-500">
                    {index + 1}
                  </td>
                  <td className="py-2 px-4  border border-gray-500">
                    {user.first_name}
                  </td>
                  <td className="py-2 px-4  border border-gray-500">
                    {user.last_name}
                  </td>
                  <td className="py-2 px-4  border border-gray-500">
                    {user.fathers_name}
                  </td>
                  <td className="py-2 px-4  border border-gray-500">
                    {user.date_of_birth}
                  </td>
                  <td className="py-2 px-4  border border-gray-500 capitalize">
                    {user.gender}
                  </td>
                  <td className="py-2 px-4  border border-gray-500">
                    {user.specialty}
                  </td>
                  <td className="py-2 px-4  border border-gray-500">
                    {user.level}
                  </td>
                  <td className="py-2 px-4  border border-gray-500">
                    {user.location}
                  </td>
                  <td className="py-2 px-4  border border-gray-500">
                    {user.phone}
                  </td>
                  <td className="py-2 px-4  border border-gray-500">
                    {user.attached_group}
                  </td>
                  <td className="py-2 px-4  border border-gray-500">
                    {user.login}
                  </td>
                  <td className="py-2 px-4  border border-gray-500">
                    {user.password}
                  </td>
                  <td className="py-2 px-4  border border-gray-500 flex space-x-2">
                    <button
                      className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
                      // onClick={() => handleEdit(user)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default LeaderUniver;
