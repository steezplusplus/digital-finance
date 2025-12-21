export type UtilizationType = {
  organizationName: string;
  organizationColor: string;
  monthToDateSavings: number;
  currency: string;
  percentage: number;
  target: number;
  status: 'underutilized' | 'optimal' | 'overutilized';
  tooltip: string;
};

// TODO: Finish this type
export type CloudCostDataType = {
  account: {};
  meta: any;
  period: {};
  reservations: [];
  spend: {};
  savings: {};
  tableConfig: {};
  utilization: UtilizationType;
};
