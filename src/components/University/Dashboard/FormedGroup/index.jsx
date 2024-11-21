const FormedGroup = () => {
  return (
    <div className="w-[1110px] max-w-full px-4 pt-[60px] mx-auto">
      <h3 className="text-[20px] font-semibold tracking-[1px]">Formed Group</h3>

      <div className="pt-[20px] flex gap-2 text-[20px]">
        <p className="font-semibold">Group leader:</p>
        <span className="tracking-[1.1px]">Alimov Alijon</span>
      </div>
      <div className="pt-[10px] flex gap-2 text-[20px]">
        <p className="font-semibold">Attached group:</p>
        <span className="tracking-[1.1px]">217-21</span>
      </div>
      <div className="pt-[10px] flex flex-col gap-4">
        <p className="font-semibold text-[20px]">
          Students of the group and the organizations to which they have applied
        </p>
        <table className="min-w-full border border-gray-300 text-left">
          <thead className="bg-stone-100 border border-gray-500">
            <tr>
              <th className="py-2 px-4  border border-gray-500">#</th>
              <th className="py-2 px-4  border border-gray-500">First Name</th>
              <th className="py-2 px-4  border border-gray-500">Last Name</th>
              <th className="py-2 px-4  border border-gray-500">Phone</th>
              <th className="py-2 px-4  border border-gray-500">Name of the organization</th>
            </tr>
          </thead>
          <tbody className="bg-[#fff]">
            <tr className="hover:bg-gray-50">
              <td className="py-2 px-4  border border-gray-500 font-medium">
                1
              </td>
              <td className="py-2 px-4  border border-gray-500 font-medium">
                Aziz
              </td>
              <td className="py-2 px-4  border border-gray-500 font-medium">
                Azizov
              </td>
              <td className="py-2 px-4  border border-gray-500 font-medium">
                +998992400421
              </td>
              <td className="py-2 px-4  border border-gray-500 font-medium">
                Soliq boshqarmasi
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FormedGroup;
