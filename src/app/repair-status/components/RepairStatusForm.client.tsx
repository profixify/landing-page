"use client";
import Input from "@/app/repair-status/components/Input";
import Timeline from "@/components/Timeline";
import { BaseRepairStatus } from "@/components/Timeline/types";
import { cn } from "@/core/utils";
import { useState } from "react";
import { MdSearch } from "react-icons/md";
import { toast } from "sonner";
import { Drawer } from "vaul";

const RepairStatusFormClient = () => {
  const [repairCode, setRepairCode] = useState<string | undefined>(undefined);
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>(undefined);
  const [repairStatuses, setRepairStatuses] = useState<BaseRepairStatus[]>([]);

  const fetchData = async () => {
    if (repairCode && phoneNumber) {
      const url = encodeURI(
        `${process.env.NEXT_PUBLIC_API_URL}/repairs/check-status/${repairCode}/${phoneNumber}/`
      );
      const response = await fetch(url);
      if (response.status === 200) {
        const data = await response.json();
        setRepairStatuses(data);
      } else {
        toast.error("Not found record");
        setPhoneNumber(undefined);
        setRepairCode(undefined);
      }
    }
  };

  return (
    <>
      <div className="flex flex-col px-5">
        <div className="mt-5 flex gap-2 xs:flex-col md:flex-row">
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
                    ? "bg-green-700 hover:bg-green-600"
                    : "dark:bg-slate-300 bg-slate-700 cursor-default",
                  "transition-all duration-500 rounded-md px-2 flex justify-center items-center xs:py-2 sm:py-0"
                )}
                onClick={fetchData}
              >
                <MdSearch className="xs:text-2xl lg:text-4xl text-slate-100" />
              </button>
            </Drawer.Trigger>
            {repairStatuses.length ? (
              <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 bg-gray-500/20 backdrop-blur-sm z-30" />
                <Drawer.Content className="bg-zinc-100 flex flex-col rounded-xl h-screen fixed z-40 top-0 xs:left-1/4 md:left-3/4 right-0">
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
