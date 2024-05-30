"use client";
import Input from "@/app/repair-status/components/Input";
import Timeline from "@/components/Timeline";
import { BaseRepairStatus } from "@/components/Timeline/types";
import { cn } from "@/core/utils";
import { useState } from "react";
import { MdSearch } from "react-icons/md";
import { Drawer } from "vaul";

const RepairStatusFormClient = () => {
  const [repairCode, setRepairCode] = useState<string | undefined>("E3U1B4hk");
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>(
    "+905511111111"
  );
  const [repairStatuses, setRepairStatuses] = useState<BaseRepairStatus[]>([]);
  const fetchData = async () => {
    if (repairCode && phoneNumber) {
      const url = encodeURI(
        `http://localhost:8000/api/repairs/check-status/${repairCode}/${phoneNumber}/`
      );
      const response = await fetch(url);
      console.log("response", response);
      if (response.status === 200) {
        const data = await response.json();
        if (data) {
          setRepairStatuses(data);
        }
      }
    }
  };
  return (
    <>
      <div className="flex flex-col">
        <div className="mt-5 flex gap-2">
          <Input
            placeholder="Repair Code"
            setStateFunc={(e) => setRepairCode(e.currentTarget.value)}
            value={repairCode}
          />
          <Input
            placeholder="Phone Number"
            setStateFunc={(e) => setPhoneNumber(e.currentTarget.value)}
            value={phoneNumber}
          />

          <Drawer.Root direction="right">
            <Drawer.Trigger asChild>
              <button
                disabled={!repairCode && !phoneNumber}
                className={cn(
                  repairCode && phoneNumber
                    ? "bg-green-600 hover:bg-green-500"
                    : "bg-zinc-600 cursor-default",
                  "transition-all duration-500 rounded-md px-2 flex justify-center items-center xs:py-2 sm:py-0"
                )}
                onClick={fetchData}
              >
                <MdSearch className="xs:text-2xl lg:text-4xl" />
              </button>
            </Drawer.Trigger>
            {repairStatuses.length ? (
              <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 bg-gray-500/20 backdrop-blur-sm z-1" />
                <Drawer.Content className="bg-zinc-100 flex flex-col rounded-xl h-screen fixed z-2 top-0 xs:left-1/4 md:left-3/4 right-0">
                  <Timeline statuses={repairStatuses} />
                </Drawer.Content>
              </Drawer.Portal>
            ) : undefined}
          </Drawer.Root>
        </div>
      </div>
    </>
  );
};

export default RepairStatusFormClient;
