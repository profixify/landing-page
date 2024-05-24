import RepairStatusFormClient from "@/app/repair-status/components/RepairStatusForm.client";

const RepairStatus = () => {
  return (
    <div className="h-[calc(100vh-5rem)] flex items-center justify-center">
      <div className="text-center text-white flex justify-center">
        <div className="flex flex-col gap-2 max-w-2xl">
          <h1 className="text-4xl font-extrabold text-white sm:text-center sm:text-6xl">
            Check Repair Status
          </h1>
          <h4 className="text-lg text-gray-400">
            Please enter the
            <span className="font-bold italic text-gray-200 mx-1">
              repair code
            </span>
            and
            <span className="font-bold mx-1 italic text-gray-200">
              phone number
            </span>
            registered in the system.
          </h4>
          <RepairStatusFormClient />
        </div>
      </div>
    </div>
  );
};

export default RepairStatus;
