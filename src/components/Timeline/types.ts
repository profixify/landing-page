export interface BaseRepairStatus {
  uuid: string;
  title: string;
  note: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface TimelineProps {
  statuses: BaseRepairStatus[];
}
