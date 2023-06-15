import { IoSchoolSharp } from "react-icons/io5";
import { GiTeacher } from "react-icons/gi";
import { FaQuoteLeft } from "react-icons/fa";

const InstructorCard = ({ topInstructor }) => {
  return (
    <div className="card h-full group description rounded-2xl card-compact w-full lg:ml-3  lg:mr-3 bg-base-200 shadow-xl">
      <div className="flex justify-center items-center gap-5">
        <div className="card-body z-50">
          <h2 className="card-title text-yellow-500">{topInstructor.name}</h2>
          {topInstructor.quote && (
            <div className="text-white flex gap-2 items-center">
              <FaQuoteLeft className="text-lg" />
              <strong>&quot;{topInstructor.quote}&quot;</strong>
            </div>
          )}
          <div className="text-white flex gap-2 items-center">
            <IoSchoolSharp className="text-lg" />
            <strong>Student Count:</strong> {topInstructor.totalStudents}
          </div>
          <div className="text-white flex gap-2 items-center">
            <GiTeacher className="text-lg" />
            <strong>Classes Taken:</strong> {topInstructor.classes.length}
          </div>
        </div>
        <div className="mr-5">
          <img
            className="group-hover:scale-110 duration-200 lg:w-[100px] w-[calc(26vw)] lg:h-[100px] h-[calc(26vw)] rounded-full border-zinc-400 border-[2px] lg:border-[4px]"
            src={topInstructor.image}
            alt=""
          />
        </div>
      </div>
      <div className="absolute lg:bottom-0 left-0 w-1/2 h-full bg-gradient-to-l from-transparent to-base-100"></div>
    </div>
  );
};

export default InstructorCard;
