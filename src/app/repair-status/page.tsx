import RepairStatusFormClient from "@/app/repair-status/components/RepairStatusForm.client";

const RepairStatusPage = () => {
  return (
    <div className="h-[calc(100vh-5rem)] flex items-center justify-center px-5">
      <div className="text-center dark:text-slate-100 text-slate-950 flex justify-center">
        <div className="flex flex-col gap-2 max-w-2xl">
          <h1 className="text-4xl font-extrabold dark:text-slate-100 text-slate-950 sm:text-center sm:text-6xl">
            Check Repair Status
          </h1>
          <h4 className="text-lg dark:text-slate-100 text-slate-700">
            Please enter the
            <span className="font-bold italic dark:text-slate-100 text-slate-700 mx-1">
              repair code
            </span>
            and
            <span className="font-bold mx-1 italic dark:text-slate-100 text-slate-700">
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

export default RepairStatusPage;
