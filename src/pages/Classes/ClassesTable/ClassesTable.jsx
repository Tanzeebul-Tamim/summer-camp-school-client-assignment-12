import { useState } from "react";
import ClassesTableHead from "./ClassesTableHead";
import { useEffect } from "react";
import { getTotalClasses } from "../../../api/api";
import { GiTeacher } from "react-icons/gi";
import { MdLibraryAdd } from "react-icons/md";

const ClassesTable = ({ classes }) => {
  const [totalClasses, setTotalClasses] = useState({});
  useEffect(() => {
    getTotalClasses()
      .then((data) => {
        setTotalClasses(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      {classes.length == 0 ? (
        <div className="text-5xl flex justify-center py-28">
          <h1>No results found for your search</h1>
        </div>
      ) : (
        <div className="overflow-x-auto pt-10">
          <div className="mb-5 flex gap-2 text-white description text-xl">
            <strong className="flex items-center gap-2">
              <GiTeacher className="text-2xl" />
              <span>Classes Count :</span>
            </strong>{" "}
            {totalClasses.totalClasses}
          </div>
          <table className="table text-center description text-white">
            {/* head */}
            <ClassesTableHead />
            <tbody className="text-xl">
              {classes.map((classItem) => {
                const availableSeat =
                  classItem.studentSlot - classItem.totalStudent;

                return (
                  <tr className={availableSeat == 0 && 'bg-red-950'} key={classItem._id}>
                    <td className="flex justify-center">
                      <img
                        className="w-32 rounded-xl h-16"
                        src={classItem.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </td>
                    <td>
                      <div>
                        <div className="font-bold">{classItem.name}</div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <div className="font-bold">
                          {classItem.instructorName}
                        </div>
                      </div>
                    </td>
                    <td>
                      {availableSeat == 0
                        ? "Fully Booked"
                        : availableSeat}
                    </td>
                    <td>$ {classItem.price}</td>
                    <td>
                      <button
                        disabled={availableSeat == 0 && true}
                        className={`btn ${availableSeat == 0 ? 'disabled:bg-red-900' : 'disabled:bg-stone-900'} text-white btn-sm rounded-full hover:bg-stone-700 bg-stone-800`}
                      >
                        <MdLibraryAdd /> <span>Book Class</span>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default ClassesTable;
