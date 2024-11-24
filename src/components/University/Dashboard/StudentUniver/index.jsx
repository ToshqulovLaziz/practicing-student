import { MdOutlineAddCircleOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setModalStudent } from "../../../../redux/modalSlice";
import { setValuesStudent } from "../../../../redux/valuesSlice";
import { useEffect, useState } from "react";
import { supabase } from "../../../../tools/supabaseClient";

const StudentUniver = () => {
  const dispatch = useDispatch();
  const valuesStudent = useSelector((state) => state.values.valuesStudent || []);
  const modalStudent = useSelector((state) => state.modal.modalStudent);

  const [isUpdated, setIsUpdated] = useState(false);
  const fetchData = async () => {
    try {
      const { data, error } = await supabase
        .from("create_student_info")
        .select("*");
      if (error) throw error;
      dispatch(setValuesStudent(data));
      setIsUpdated(false);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const { error } = await supabase
        .from("create_student_info")
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
  }, [modalStudent, isUpdated]);
  return (
    <div className="w-[1110px] max-w-full px-4 pt-[60px] mx-auto">
      <div className="w-[100%] flex justify-between items-center">
        <h3 className="text-[20px] font-semibold tracking-[1px]">Student</h3>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2"
          onClick={() => dispatch(setModalStudent())}
        >
          <MdOutlineAddCircleOutline className="text-[25px]" />
          Add Students
        </button>
      </div>
      <div className="overflow-x-auto pt-[50px]">
        <table className="min-w-full border border-gray-300 text-left">
          <thead className="bg-stone-50 whitespace-nowrap border border-gray-500">
            <tr>
              <th className="py-2 px-4  border border-gray-500">#</th>
              <th className="py-2 px-4  border border-gray-500">First Name</th>
              <th className="py-2 px-4  border border-gray-500">Last Name</th>
              <th className="py-2 px-4  border border-gray-500">
                Father{"'"}s Name
              </th>
              <th className="py-2 px-4  border border-gray-500">
                Date of Birth
              </th>
              <th className="py-2 px-4  border border-gray-500">Gender</th>
              <th className="py-2 px-4  border border-gray-500">Location</th>
              <th className="py-2 px-4  border border-gray-500">Phone</th>
              <th className="py-2 px-4  border border-gray-500">Group</th>
              <th className="py-2 px-4  border border-gray-500">Login</th>
              <th className="py-2 px-4  border border-gray-500">Password</th>
              <th className="py-2 px-4  border border-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-[#fff]">
            {valuesStudent.map((user, index) => (
              <tr key={user.id} className="hover:bg-gray-50 whitespace-nowrap">
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
                  {user.location}
                </td>
                <td className="py-2 px-4  border border-gray-500">
                  {user.phone}
                </td>
                <td className="py-2 px-4  border border-gray-500">
                  {user.group}
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
  );
};

export default StudentUniver;
