import { MdOutlineAddCircleOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setModalOragnization } from "../../../../redux/modalSlice";
import { setValuesOragnization } from "../../../../redux/valuesSlice";
import { supabase } from "../../../../tools/supabaseClient";
import { useState, useEffect } from "react";
const AddOrganization = () => {
  const dispatch = useDispatch();
  const valuesOragnization = useSelector(
    (state) => state.values.valuesOragnization || []
  );
  const modalOragnization = useSelector(
    (state) => state.modal.modalOragnization
  );
  const [isUpdated, setIsUpdated] = useState(false);
  const fetchData = async () => {
    try {
      const { data, error } = await supabase
        .from("create_organization_info")
        .select("*");
      if (error) throw error;
      dispatch(setValuesOragnization(data));
      setIsUpdated(false);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const { error } = await supabase
        .from("create_organization_info")
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
  }, [modalOragnization, isUpdated]);
  return (
    <div className="w-[1110px] max-w-full px-4 pt-[60px] mx-auto">
      <div className="w-[100%] flex justify-between items-center">
        <h3 className="text-[20px] font-semibold tracking-[1px]">
          Organization
        </h3>
        <button
          onClick={() => dispatch(setModalOragnization())}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2"
        >
          <MdOutlineAddCircleOutline className="text-[25px]" />
          Add Organization
        </button>
      </div>
      <div className="overflow-x-auto pt-[50px]">
        <table className="min-w-full border border-gray-300 text-left">
          <thead className="bg-stone-50 whitespace-nowrap border border-gray-500">
            <tr>
              <th className="py-2 px-4  border border-gray-500">#</th>
              <th className="py-2 px-4  border border-gray-500">
                Organization Name
              </th>
              <th className="py-2 px-4  border border-gray-500">
                Full Address
              </th>
              <th className="py-2 px-4  border border-gray-500">
                Oragnization Phone
              </th>
              <th className="py-2 px-4  border border-gray-500">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-[#fff]">
            {valuesOragnization.map((user, index) => (
              <tr key={user.id} className="hover:bg-gray-50 whitespace-nowrap">
                <td className="py-2 px-4  border border-gray-500">
                  {index + 1}
                </td>
                <td className="py-2 px-4  border border-gray-500">
                  {user.organization_name}
                </td>
                <td className="py-2 px-4  border border-gray-500">
                  {user.full_address}
                </td>
                <td className="py-2 px-4  border border-gray-500">
                  {user.organization_phone}
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

export default AddOrganization;
