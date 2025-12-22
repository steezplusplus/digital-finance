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
  account: Record<string, unknown>;
  meta: Record<string, unknown>;
  period: Record<string, unknown>;
  reservations: [];
  spend: Record<string, unknown>;
  savings: Record<string, unknown>;
  tableConfig: Record<string, unknown>;
  utilization: UtilizationType;
};
