"use client";
import Input from "@/app/repair-status/components/Input";
import { MdSearch } from "react-icons/md";
import { useState } from "react";

const RepairStatusFormClient = () => {
  const [repairCode, setRepairCode] = useState<string | undefined>(undefined);
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>(undefined);
  return (
    <div className="mt-5 flex gap-2">
      <Input
        placeholder="Repair Code"
        state={repairCode}
        setStateFunc={(e) => setRepairCode(e.currentTarget.value)}
      />
      <Input
        placeholder="Phone Number"
        state={phoneNumber}
        setStateFunc={(e) => setPhoneNumber(e.currentTarget.value)}
      />
      <button
        disabled={!repairCode && !phoneNumber}
        className={`${
          repairCode && phoneNumber
            ? "bg-green-600 hover:bg-green-500"
            : "bg-zinc-600 cursor-default"
        } transition-all duration-500 rounded-md px-2`}
      >
        <MdSearch className="text-4xl" />
      </button>
    </div>
  );
};

export default RepairStatusFormClient;
